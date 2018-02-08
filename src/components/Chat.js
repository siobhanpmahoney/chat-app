import React from 'react'

const Chat = ({chatHistory, friend, username, userId}) => {

  return (
    <div>
      {chatHistory.map((c) => {
        {return <div> {c} </div> }
      })}
    </div>
  )
}
export default Chat
