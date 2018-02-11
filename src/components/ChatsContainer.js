import React from "react";
import ChatList from './ChatList'

class ChatsContainer extends React.Component {

  renderParticipantUserNames = (chat) => {
    usernames = []
    chat.messages.forEach((m) => {
      if (!usernames.includes(m.username)) {
        usernames << m.username
      }
    })
    return usernames.split(", ")
  }

  render() {
    console.log(this.props.chats)
    return (
      <div>
  <ChatList user={this.props.user} friends={this.props.friends} chats={this.props.chats} usernames = {this.renderParticipantUserNames()} handleNewMessageListen={this.props.handleNewMessageListen}/>
      </div>
    )
  }
}
export default ChatsContainer
