import React from 'react';

const NewMessageForm = ({chat, chats, friends, user, handleNewMessageListen}) => {
  return (
    <div>
      <input type="text" onChange={user.handleNewMessageListen}/>
    </div>
  )
}

export default NewMessageForm
