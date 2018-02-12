import React from 'react';
import NewMessageForm from './NewMessageForm'


const ActiveChat = (props) => {
  let chatInfo = null

  if(props.messages === null){
    chatInfo = <h1>No current chat selected</h1>
  } else {
    chatInfo = props.messages.map(m => <p key={m.id}>{m.content}</p>)
  }
  return (
    <div className="active-chat">

        {chatInfo}
        <NewMessageForm chat={props.chat} messageDraftListener={props.messageDraftListener} handleNewMessageSubmit={props.handleNewMessageSubmit} activeChatId={props.activeChatId}/>


    </div>
  )
}


export default ActiveChat
