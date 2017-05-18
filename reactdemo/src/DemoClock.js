import React, { Component } from 'react'


//
// This is an ES6 class. It extends a React component
// 
class DemoClock extends Component {

  // Classes can have constructors
  constructor(params) {
    console.log('--> DemoClock CONSTRUCTOR');
    super(params); // Must do this since we're extending another class

    // React components use STATE to make changes in the UI
    this.state = {
      labelShown: false // default value
    }

    // Bind methods
    // Allows using 'this' inside the method
    this.toggleLabel = this.toggleLabel.bind(this);
  }


  // React components are REQUIRED to have a render method.
  // React will call Render for a component when its state or its props change
  render() {
    console.log('--> DemoClock RENDERING');

    // Use JS to define CSS for a JSX element
    const clockStyle = {
      padding: 5,
      width: 60,
      backgroundColor: "cornflowerblue",
      color: "white",
      borderRadius: 3,
      cursor: "pointer",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 10
    }

    // Save a JSX component as a JS variable
    const label = <b>Time Label</b>

    // Render must return JSX (html in JS)
    return (
      <div className="Clock">
        <h4>Timer</h4>
        {/* onClick can call a method of this class */}
        
        <div onClick={ this.toggleLabel } style={ clockStyle }>
          {/* Can include Javascript within JSX using { } */}
          { this.props.timer }:00
        </div>

        {/* Conditionally show a JS variable as JSX */}
        { this.state.labelShown ? label : '' }
      </div>
    );
  }


  // 
  // Click handler
  // (will receive the JS event as a param)
  //
  toggleLabel(event) {
    this.setState({
      labelShown: !this.state.labelShown
    });
  }
}

export default DemoClock;
