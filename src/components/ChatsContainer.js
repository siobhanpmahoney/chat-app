import React from "react";
import ChatList from './ChatList'
import ActiveChat from './ActiveChat'

class ChatsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeChat: {}
    }
  }

  render() {

    return (
      <div className="chats-container">
        <ActiveChat chat={this.state.activeChat} />
        <ChatList chats={this.props.chats} />
      </div>
    )
  }
}
export default ChatsContainer
