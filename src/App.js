import React, { useEffect } from 'react';

import './App.css';


function App() {

  useEffect(() => {
    console.log("Hello")
  }, [])

  return (
    <div className="App">
      <h1>Asset feed dashboard</h1>
      <p>Using the test server API (node server.js) 
        the candidate should build the following components and display them in a grid:
      </p>
      <ol>
        <li>The top ten asset data points by value, sorted descending by value.</li>
        <li>Average state of charge of the previous 100 data points.</li>
        <li>Text based message stream, simply displaying the most recent asset data point.</li>
      </ol>
    </div>
  );
}

export default App;
