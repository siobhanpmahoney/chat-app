import React from 'react';
import Chat from './Chat'
import NewMessageForm from './NewMessageForm'

const OpenChats = ({chats, friends, user, openChats, handleNewMessageSend}) => {

  return(
    <div className="openChatContainer">
    {openChats.map((chat) => {
      return <div key={chat.chat_id} className="openChatWindow">
        <div className="openChatWindowHistory">
      <Chat chat={chat} user={user} friends={friends} />
      </div>

      <div className="openChatWindowForm">
      <NewMessageForm user={user} chat={chat}  handleNewMessageSend={handleNewMessageSend} key={chat.chat_id} />
      </div>
</div>
    })}
    </div>
  )
}

export default OpenChats
