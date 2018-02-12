import React from 'react'

const Chat = (props) => {
  return (
    <div className="chat">
      <h4 onClick={props.onClick} data-id={props.chat.id}>
        {props.chat.title}
      </h4>
    </div>
  )
}
export default Chat
