import React, { Component } from 'react';
import logo from './logo.svg';
import DemoClockContainer from './DemoClockContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* We can pass props to DemoClock here in addition to those added by redux */}
        <DemoClockContainer label="So Cool!" />
      </div>
    );
  }
}

export default App;
