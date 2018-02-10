import React from "react";
import ChatList from './ChatList'

class ChatsContainer extends React.Component {

  
  render() {

    return (
      <div>
        <ChatList chats={this.props.chats} />
      </div>
    )
  }
}
export default ChatsContainer
