import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Welcome to Barefoot Nomad! </h2>
      </div>
    );
  }
}

export default hot(module)(App);
