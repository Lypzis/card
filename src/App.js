import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Home from './Home';

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Route path="/card/home" component={Home} />
        <Redirect from="/" to="/card/home" />
      </React.Fragment>
    );
  }

}

export default App;
