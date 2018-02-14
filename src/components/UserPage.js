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
        {this.props.friends.length > 0 &&
          <FriendsContainer user={this.props.user} chats={this.props.chats} friends={this.props.friends}/>
        }
        {this.props.chats.length > 0 &&
        <ChatsContainer user={this.props.user} chats={this.props.chats} friends={this.props.friends} addResponseToState={this.props.addResponseToState} />}
      </div>
    )
  }
}

export default UserPage
