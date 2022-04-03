import React, { useState, useEffect } from 'react';

function QueryComp() {
  const [query, setQuery] = useState('');
  const [selectedQuery, setSelectedQuery] = useState('selection1');
  const [incomingData, setIncomingData] = useState('');

  const testQuery1 = `query {
    books {
    name
    }
  }`;

  const testQuery2 = `query {
    authors {
    name
  }
}`;

  const testQuery3 = `query {
    books {
      author{\n\tname\n      }
    }
  }`;

  useEffect(() => {
    const inputField = document.getElementById(
      'queryInput',
    );

    if (selectedQuery === 'selection1') {
      inputField.value = testQuery1;
      setQuery(testQuery1);
    }
    if (selectedQuery === 'selection2') {
      inputField.value = testQuery2;
      setQuery(testQuery2);
    }
    if (selectedQuery === 'selection3') {
      inputField.value = testQuery3;
      setQuery(testQuery3);
    }
  }, [testQuery1, testQuery2, testQuery3, selectedQuery]);

  const submitQuery = async () => {
    await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setIncomingData(`${JSON.stringify(res.data, null, 2)}`);
      });
  };
  return (
    <div className="queryComp">
      <select
        name="queries"
        id="queryDropdown"
        onChange={(e) => {
          setSelectedQuery(e.target.value);
        }}
      >
        <option value="selection1">Test Query 1</option>
        <option value="selection2">Test Query 2</option>
        <option value="selection3">Test Query 3</option>
      </select>
      <button id="submitQuery" onClick={() => submitQuery()} type="submit">
        Submit Query
      </button>
      <h2>Query:</h2>
      <textarea
        className="textArea"
        id="queryInput"
        placeholder="Please select a test query from the drop down menu."
        readOnly
      />
      <br />
      <h2>Data:</h2>
      <textarea
        className="text-area"
        id="query-output"
        placeholder="Incoming data will be shown here."
        readOnly
        value={incomingData}
      />
    </div>
  );
}

export default QueryComp;
