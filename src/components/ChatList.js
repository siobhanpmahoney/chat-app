import React from 'react'
import Chat from './Chat'



const ChatList = (props) => {

  return(
    <div className="chats-list">
      <ul>
        {props.chats.map((chat) => {
          return <Chat chat={chat} key={chat.id} onClick={props.onClick} user={props.user} chats={props.chats} friends={props.friends} user={props.user}  activeChatMessages={props.activeChatMessages} activeChatId={props.chatId} messageDraftListener={props.messageDraftListener} handleNewMessageSubmit={props.handleNewMessageSubmit}  />
        })}
      </ul>
    </div>
  )
}

export default ChatList
