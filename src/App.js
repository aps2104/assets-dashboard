import React, { useEffect } from 'react';

import './App.css';

const websocketURLParams = new URLSearchParams({
  'authorization': process.env.REACT_APP_AUTH_TOKEN,
  'fields': "kw_inst,frequency_inst,soc,status_io_inst,status_inst,system_output"
})

const websocketURL = new URL(
  '/ws/1.0/assets/1927/live-performance?' + websocketURLParams.toString(),
  'wss://api.limejump.com'
)

function App() {

  useEffect(() => {
    const wss = new WebSocket(websocketURL)
    wss.onopen = () => console.log('Websocket is connected.')
    wss.onmessage = e => console.log(e);
  })

  return (
    <div className="App">
      <h1>Real time asset feed dashboard</h1>
      <p>Using the stream based asset data via the websocket provided,
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
