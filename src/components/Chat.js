import React from 'react'

const Chat = ({chat}) => {

  return (
    <div className = "chatWindow">
       {chat.messages.map((m) => {
         return <div>{m.username} ({m.sent}): {m.content}</div>
       })}
    </div>
  )
}
export default Chat
