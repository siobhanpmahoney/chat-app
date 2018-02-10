import React from 'react'
import Chat from './Chat'



const ChatList = (props) => {
  
  return(
    <div>
      <ul>
        {props.chats.map((chat) => {
          return <Chat chat={chat} key={chat.id} />
        })}
      </ul>
    </div>
  )
}

export default ChatList
