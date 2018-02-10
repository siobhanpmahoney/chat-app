import React from 'react';
import FriendList from './FriendList.js'

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "user1",
      friends: [{id: 2, friendUserName: "user2"},
                {id: 3, friendUserName: "user3"}]
    }
  }


  render() {

    return (
      <div>
        <div className="friendList">
          <FriendList username={this.state.username} userId={this.props.id} friends={this.state.friends}/>
        </div>
      </div>
  )
  }
}

export default User
