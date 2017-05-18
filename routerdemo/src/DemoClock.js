import React, { Component } from 'react'


class DemoClock extends Component {

  constructor(params) {
    console.log('--> DemoClock CONSTRUCTOR');
    super(params);

    // Set the default time of the clock to zero unless there is default
    // passed via the URL (convert to a number)
    const time = Number(this.props.params.defaultTime) || 0;
    this.state = {
      timer: time,
      labelShown: false
    };

    // Bind methods
    this.toggleLabel = this.toggleLabel.bind(this);
  }


  componentDidMount() {
    console.log('--> DemoClock DID MOUNT (render)');
    const that = this;
    
    // Update the timer
    this.myInterval = setInterval(() => {
      that.setState({
        timer: that.state.timer + 1
      })
    }, 1000);
  }


  //
  // This funciton will be called by React before the component is removed
  // from the UI. This is where we clean up any ongoign network requests etc.
  // 
  componentWillUnmount() {
    console.log('--> DemoClock WILL UNMOUNT');
    
    // Stop the timer
    clearInterval(this.myInterval)
  }


  //
  // This function will be called by React before it renders 
  // (excludes the first render).
  // 
  // It will be passed the new props and new state that the component is about
  // to receive.
  // 
  componentWillUpdate(newProps, newState) {
    console.log('--> DemoClock WILL UPDATE');

    // Update the time to match the value in the URL if that value exists and 
    // it is different from the previous value
    if ((newProps.params.defaultTime !== undefined) &&
        (this.props.params.defaultTime !== newProps.params.defaultTime)) {
      this.setState({
        timer: Number(newProps.params.defaultTime) // Convert to a number
      });
    }
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

    const label = <b>Time Label</b>;

    return (
      <div className="Clock">
        <h4>Timer</h4>
        <p>Note: you can set the time to 11 by going to:</p>
        <a href="/#/clock/11">/#/clock/11</a>
        
        <div onClick={ this.toggleLabel } style={ clockStyle }>
          { this.state.timer }:00
        </div>

        { this.state.labelShown ? label : '' }
      </div>
    );
  }


  // 
  // Click handler
  // Will show the label
  //
  toggleLabel(event) {
    this.setState({
      labelShown: !this.state.labelShown
    });
  }
}

export default DemoClock;
