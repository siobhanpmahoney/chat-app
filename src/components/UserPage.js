import React from "react";
import FriendsContainer from './FriendsContainer';
import ChatsContainer from './ChatsContainer';

class UserPage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      allUsers: []
    }
  }

  render() {
    return (
      <div className="user-page">
        <FriendsContainer friends={this.props.friends} />
        <ChatsContainer chats={this.props.chats} />
      </div>
    )
  }
}

export default UserPage
