import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User'

class App extends Component {
  render() {
    return (
      <div className="App">
        <User id={1}/>
      </div>
    );
  }
}

export default App;
