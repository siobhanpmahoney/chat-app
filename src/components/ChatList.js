import React from 'react'
import Chat from './Chat'



const ChatList = ({chats, friends, user, chatCardClickListener}) => {


  return(
    <div className="chatList">

        {chats.map((chat) => {
          return <div onClick={()=>{chatCardClickListener(chat)}} > <Chat chat={chat} key={chat.chat_id} user={user} friends={friends} chatCardClickListener={chatCardClickListener} /> </div>

      })}

    </div>
  )
}

export default ChatList
