import React from 'react';
import Chat from './Chat'
import NewMessageForm from './NewMessageForm'

const OpenChats = ({chats, friends, user, openChats, handleNewMessageSend}) => {

  return(
    <div>
    {openChats.map((chat) => {
      return <div key={chat.chat_id} >
      <Chat chat={chat} user={user} friends={friends} />



      <NewMessageForm user={user} chat={chat}  handleNewMessageSend={handleNewMessageSend} key={chat.chat_id} />
</div>
    })}
    </div>
  )
}

export default OpenChats
