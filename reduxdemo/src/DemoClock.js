import React, { Component } from 'react'


class DemoClock extends Component {

  constructor(params) {
    console.log('--> DemoClock CONSTRUCTOR');
    super(params);

    // We do NOT define state in components when using Redux

    // Bind methods
    this.toggleLabel = this.toggleLabel.bind(this);
  }


  componentDidMount() {
    console.log('--> DemoClock DID MOUNT (render)');
    const that = this;
    
    // Update the timer
    this.myInterval = setInterval(() => {
      
      // Triggers a Redux "dispatch" event that causes the "reducer"
      // to update the state
      that.props.updateTimer(that.props.theTimer + 1);
    }, 1000);
  }


  componentWillUnmount() {
    console.log('--> DemoClock WILL UNMOUNT');
    
    // Stop the timer
    clearInterval(this.myInterval)
  }


  render() {
    console.log('--> DemoClock RENDERING');
    
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

    // this.props.label was passed "though" the DemoClockContainer wrapper
    // from App.js
    const label = <b>{ this.props.label }</b>;

    return (
      <div className="Clock">
        <h4>Timer</h4>
        
        <div onClick={ this.toggleLabel } style={ clockStyle }>
          { this.props.theTimer }:00
        </div>

        { this.props.labelShowing ? label : '' }
      </div>
    );
  }


  // 
  // Click handler
  // Will show the label
  //
  toggleLabel(event) {

    // Triggers a Redux "dispatch" event that causes the "reducer"
    // to update the state
    this.props.toggleLabel(!this.props.labelShowing);
  }
}

export default DemoClock;
