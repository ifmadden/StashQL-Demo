import React from 'react';
import MainContainer from './client/containers/MainContainer';
import HeaderContainer from './client/containers/HeaderContainer';

function App() {
  return (
    <div>
      <HeaderContainer />
      <MainContainer />
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
