import React from 'react'
import Chat from './Chat'



const ChatList = ({chats, friends, user}) => {


  return(
    <div className="chatList">

        {chats.map((chat) => {
          return<div><Chat chat={chat} key={chat.chat_id} user={user} friends={friends} /></div>
        })}
    </div>
  )
}

export default ChatList
