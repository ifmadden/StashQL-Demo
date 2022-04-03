import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, useRoutes,
} from 'react-router-dom';
import StashQLHeaderMain from '../components/StashQLHeaderMain';
import StashQLBodyMain from '../components/StashQLBodyMain';
import QueryComp from '../components/Demo/QueryComp';

export default function MainContainer() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <StashQLHeaderMain />
              <StashQLBodyMain />
            </>
)}
        />

        <Route
          path="/Demo"
          element={(
            <QueryComp />
)}
        />
      </Routes>

    </div>

  );
}
