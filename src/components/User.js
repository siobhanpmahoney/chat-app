import React from 'react';
import FriendList from './FriendList'
import ChatContainer from './ChatContainer'

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "Mei",
      friends: [{userId: 2, username: "ana"}, {userId: 3, username: "reinhardt"}]
      // chats: [{chat_id: 1, userId: 1}, {chat_id: 2, userId: 1}]
    }
  }

  //chat fetch

  //friend fetch

// <ChatContainer userId = {this.props.id} username = {this.state.username} userChats = {this.state.chats}/>

  render() {
    console.log(this.state.friends)
    return (
      <div>
            <div>
            <div className="friendContainer">
              <FriendList userId = {this.props.id} username = {this.state.username} friends={this.state.friends}/>


            </div>
          </div>
      </div>
  )
  }
}

export default User
