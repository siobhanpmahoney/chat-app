import React from 'react'
import ActiveChat from './ActiveChat.js'

const Chat = (props) => {
  return (
    <div className="chat">
      <h4 onClick={props.onClick} data-id={props.chat.id}>
        {props.chat.title}
      </h4>
      <ActiveChat user={props.user} chat={props.chat} messages={props.activeChatMessages}  handleNewMessageSubmit={props.handleNewMessageSubmit} />
    </div>
  )
}
export default Chat
