import React from 'react'
import Chat from './Chat'



const ChatList = (props) => {
  return(
    <div className="chats-list">
      <ul>
        {props.chats.map((chat) => {
          return <Chat chat={chat} key={chat.id} onClick={props.onClick} />
        })}
      </ul>
    </div>
  )
}

export default ChatList
