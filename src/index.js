import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return <h1>I am the entry component</h1>;
};

render(<App />, document.getElementById('root'));
