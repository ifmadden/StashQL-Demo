import React, { useState, useEffect } from 'react';

const [query, setQuery] = useState('');
const [selectedQuery, setSelectedQuery] = useState('selection1');

const sampleQuery1 = `query {
    books {
    title
    authors{\n\tname\n\tcountry\n      }
    genre{\n\tname\n      }
    }
  }`;

const sampleQuery2 = `query {
    authors {
    name
  }
}`;

const sampleQuery3 = `query {
    books {
      authors{\n\tname\n      }
    }
  }`;

useEffect(() => {
  const inputField = document.getElementById(
    'query-input',
  );

  if (selectedQuery === 'selection1') {
    inputField.value = sampleQuery1;
    setQuery(sampleQuery1);
  }
  if (selectedQuery === 'selection2') {
    inputField.value = sampleQuery2;
    setQuery(sampleQuery2);
  }
  if (selectedQuery === 'selection3') {
    inputField.value = sampleQuery3;
    setQuery(sampleQuery3);
  }
}, [sampleQuery1, sampleQuery2, sampleQuery3, selectedQuery]);

const submitQuery = async () => {
  const startTime = Date.now();
  await fetch('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => res.json());
};
