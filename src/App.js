import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPage from './components/UserPage'
// import LoginForm from './components/LoginForm'

class App extends Component {
  constructor(props){
    super(props)

  }

  // <LoginForm onSubmit={this.findOrCreateUser} />



  render() {

    return (
      <div className="App">

        <UserPage  />
      </div>
    );
  }

//   findOrCreateUser = (event) => {
//     event.preventDefault()
//     let username = event.target.childNodes[0].value
//
//     fetch('http://localhost:3000/api/v1/users',
//     {
//       method: 'post',
//       headers:{
//         'Content-Type': 'application/json',
//         'Accepts': 'application/json'
//     },
//       body: JSON.stringify({username: username})
//     })
//     .then(function(response) {
//       return response.json()
//     })
//     .then(json => {
//       this.addResponseToState(json)
//     })
//   }
//
//   addResponseToState = (json) => {
//     this.setState({
//       user: json.user,
//       friends: json.user.friends,
//       chats: json.user.chats
//     })
//   }
}

export default App;
