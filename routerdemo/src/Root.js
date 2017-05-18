import React, { Component } from 'react'

// Installed React Router by running the following command:
// npm install --save react-router@3.0.2
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import DemoChild from './DemoChild'
import DemoClock from './DemoClock'

import './App.css';


class Root extends Component {

  render() {

    // Create a router that uses Hash Routing
    return (
      <Router history={ hashHistory }>

        {/* 
          * This is the default Route.
          * It has a child route whose component will be passed the props of App
          * */}
        <Route path="/" component={ App }>
          <Route path="/hello" component={ DemoChild } />
        </Route>

        {/* 
          * This is a separate top-level route. It has a child route
          * that allows us to create a variable called defaultTime. This
          * variable is available to the component via "this.props.params".
          * */}
        <Route path="/clock" component={ DemoClock }>
          <Route path=":defaultTime" />
        </Route>
      </Router>
    );
  }
}

export default Root;
