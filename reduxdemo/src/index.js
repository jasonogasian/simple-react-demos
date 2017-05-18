import React from 'react';
import ReactDOM from 'react-dom';

// Install redux with the following command:
// npm install --save redux react-redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import demoReducer from './demoReducer'
import App from './App';
import './index.css';

//
// Redux uses a "store" (JS object) to hold the state of the entire app.
// We must create a "reducer" function which is called by Redux to populate the store.
// 
const customReducer = createStore(demoReducer);


// 
// react-redux gives us a component called "Provider" that allows us to connect 
// the Redux "store" to our React application.
// 
ReactDOM.render(
  <Provider store={ customReducer }>
    <App />
  </Provider>,
  document.getElementById('root')
);
