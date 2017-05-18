//
// Import the "connect" method from react-redux to allow us to
// connect redux (state and dispatch) to our component (DemoClock)
import { connect } from 'react-redux';
import DemoClock from './DemoClock';


//
// This funciton is called by Redux acter we call "connect" (below).
// This function returns an object whose properties will be available in the
// "connected" component via "this.props".
// 
const mapStateToProps = (state, ownProps) => {

  // These will be "props" in the connected component
  return {
    theTimer: state.timer,
    labelShowing: state.labelShown
  }
}


//
// This funciton is called by Redux after we call "connect" (below).
// This function returns an object whose properties are functions which will
// be available to the "connected" component via "this.props".
// 
// These functions will "dispatch" an "action" to the "reducer" causing the Redux
// store to update its state. All reducers are always listening for these "dispatch"
// events.
// 
const mapDispatchToProps = (dispatch, ownProps) => {

  // These funcitons will be "props" in the connected component
  return {
    updateTimer: (newTime) => {

      // Call the special Redux "dispatch" function and pass it an action
      dispatch({
        type: 'TIME',
        value: newTime
      });
    },

    toggleLabel: (labelBoolean) => {

      // Note: if the key and value of a JS object are the same, you only
      // need to specify the key (labelBoolean)
      dispatch({
        type: 'LABEL',
        labelBoolean
      })
    }
  }
}


//
// Call "connect" to get a connector function from react-redux
// 
const connector = connect(mapStateToProps, mapDispatchToProps);


//
// Use the connector function to connect our two mapping funcitons (above) to 
// the DemoClock component.
// 
const DemoClockContainer = connector(DemoClock);
export default DemoClockContainer;
