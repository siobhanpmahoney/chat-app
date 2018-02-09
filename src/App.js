import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPage from './components/UserPage'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {user: {}}

  render() {
    return (
      <div className="App">
        <LoginForm onSubmit={this.findOrCreateUser}/>
        <UserPage user={this.state.user} friends={this.state.friends} chats={this.state.chats} />
      </div>
    );
  }

  findOrCreateUser = (event) => {
    event.preventDefault()
    let username = event.target.childNodes[0].value

    fetch('http://localhost:3000/api/v1/users',
    {
      method: 'post',
      headers:{
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
    },
      body: JSON.stringify({username: username})
    })
    .then(function(response) {
      return response.json()
    })
    .then(json => {
      console.log("here");
      console.log(json);
      debugger
      this.addResponseToState(json)
    })
  }

  addResponseToState = (json) => {
    this.setState({
      user: json
    })
  }
}

export default App;
