import React from "react";
import FriendList from './FriendList';

class FriendsContainer extends React.Component {

  render() {
    return (
      <div className="friendsContainer">
        <FriendList friends={this.props.friends}/>
      </div>
    )
  }
}
export default FriendsContainer
