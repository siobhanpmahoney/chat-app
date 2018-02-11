import React from 'react'
import Chat from './Chat'



const ChatList = ({chats, friends, user}) => {
  console.log({chats})
  return(
    <div className="chatList">
      <ul>
        {chats.map((chat) => {
          return <Chat chat={chat} key={chat.chat_id} user={user} friends={friends} chats={chats}/>
        })}
      </ul>
    </div>
  )
}

export default ChatList
