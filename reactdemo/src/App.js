import React, { Component } from 'react'
import logo from './logo.svg'
import DemoClock from './DemoClock'

// Each component can have its own CSS file
import './App.css';


//
// This is an ES6 class. It extends a React component
// 
class App extends Component {

  // Classes can have constructors
  constructor(params) {
    super(params); // Must do this since we're extending another class

    // React components use STATE to make changes in the UI
    this.state = {
      time: 0 // default value
    }

    // Bind methods
    // Allows using 'this' inside the method
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  // This function is called by React after the component renders the FIRST TIME
  componentDidMount() {
    const that = this;
    
    // Update the timer
    setInterval(() => {

      // MUST update state using this method, that ways React knows we did it.
      // Changing state will cause the render method to be called
      that.setState({
        time: that.state.time + 1
      })
    }, 1000);
  }


  // React components are REQUIRED to have a render method.
  // React will call Render for a component when its state or its props change
  render() {

    // Render must return JSX (html in JS)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* 
          Include another component as a child of this one.
          We can pass data to a component as a "prop"
        */}
        <DemoClock timer={ this.state.time } />
      </div>
    );
  }
}

export default App;
