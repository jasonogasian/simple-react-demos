//
// Here we dedine the initial state that this reducer controls
// 
const initialState = {
  timer: 0,
  labelShown: false
}

//
// Reducer funcitons are the ONLY WAY to change the state of the Redux store.
// A Reducer function is called bu the Redux framework whenever we call "dispatch".
// Redux passes it the state, and the action object that was "dispatched".
// 
// The reducer must return a copy of the ENTIRE state object.
//
const demoReducer = (state=initialState, action) => {
  
  // You should never make changes to the "state" variable passed to a reducer.
  // This variable is "passed by reference" and changing it will break the app.
  let stateCopy = Object.assign({}, state);

  // Reducers are always listening for ALL "dispatch" events so we need to check
  // the "type" to make sure we're updating the correct part of the state.
  switch (action.type) {
    case 'TIME':
      stateCopy.timer = action.value;
      return stateCopy;
    case 'LABEL': 
      stateCopy.labelShown = action.labelBoolean;
      return stateCopy;
    
    // The default case will be called when Redux initializes. This will
    // set the "initialState".
    default:
      return state;
  }
}

export default demoReducer;