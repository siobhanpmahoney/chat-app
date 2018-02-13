import React from 'react'

const Chat = (props) => {
  return (
    <div>
      <div className="chat">
        <h4 onClick={() => props.onClick(props.chat)} data-id={props.chat.id}>
          {props.chat.title}
        </h4>
      </div>
    </div>
  )
}
export default Chat
