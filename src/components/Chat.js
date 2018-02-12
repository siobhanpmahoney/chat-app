import React from 'react'
import NewMessageForm from './NewMessageForm'

const Chat = ({chat, friends, user, handleNewMessageListen}) => {

  return (
    <div className = "chatWindow" >
       {chat.messages.map((m) => {
         return <div><span className={}{m.username} ({m.sent}): {m.content}</div>

       })}
    </div>
  )
}
export default Chat
