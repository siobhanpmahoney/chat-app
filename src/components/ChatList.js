import React from 'react'
import Chat from './Chat'



const ChatList = ({chats, friends, user, handleNewMessageListen, usernames}) => {
  console.log({chats})
  return(
    <div className="chatList">
      <ul>
        {chats.map((chat) => {
          return <li>{()=> {usernames(chat)}}</li>

        <Chat chat={chat} key={chat.chat_id} user={user} friends={friends} handleNewMessageListen = {handleNewMessageListen}/>
        })}
      </ul>
    </div>
  )
}

export default ChatList
