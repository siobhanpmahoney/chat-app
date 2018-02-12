import React from 'react'
import Chat from './Chat'



const ChatList = ({chats, friends, user, chatCardClickListener}) => {


  return(
    <div className="chatList">

        {chats.map((chat) => {
          return <div key={chat.chat_id}  onClick={()=>{chatCardClickListener(chat)}} > <Chat chat={chat} user={user} friends={friends} chatCardClickListener={chatCardClickListener} /> </div>

      })}

    </div>
  )
}

export default ChatList
