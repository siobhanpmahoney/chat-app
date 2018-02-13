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
      <div className="userPage">
        <FriendsContainer user={this.props.user} chats={this.props.chats} friends={this.props.friends}/>
        <ChatsContainer user={this.props.user} chats={this.props.chats} friends={this.props.friends} addResponseToState={this.props.addResponseToState} />
      </div>
    )
  }
}

export default UserPage
