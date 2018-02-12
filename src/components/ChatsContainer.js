import React from "react";
import ChatList from './ChatList'



class ChatsContainer extends React.Component {



  render() {
    console.log(this.props.chats)
    return (
      <div>

        <ChatList user={this.props.user} friends={this.props.friends} chats={this.props.chats}  />

      </div>
    )
  }
}

export default ChatsContainer
