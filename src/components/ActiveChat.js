import React from 'react';
import NewMessageForm from './NewMessageForm'

class ActiveChat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleActiveStatus: false
    }
  }

  closeChat = (event) => {
    event.preventDefault()

    this.props.handleCloseChat(this.chat), this.renderNoChats
  }

  renderNoChats = () => {

    return(
      <div><h1>No current chat selected</h1></div>
    )
  }



  renderChatHTML = () => {

    return(
      <div onClick={this.closeChat}>
        <div className="activeChatWindow">


        {this.props.messages.map((m) => {

          return <div key={m.id}><b>{this.props.user.username}</b>: {m.content}</div>
        })}
          <NewMessageForm chat={this.props.chat} messageDraftListener={this.props.messageDraftListener} handleNewMessageSubmit={this.props.handleNewMessageSubmit} activeChatId={this.props.activeChatId}/>
          </div>
      </div>
    )
  }



  render() {
    console.log(this.props.messages)
    let messages = this.props.messages
    debugger
    return (
      <div>
        {this.props.messages ? this.renderChatHTML() : this.renderNoChats()}
      </div>)
      }


}

// const ActiveChat = ({chat, users, messages, handleNewMessageSubmit}) => {
//
//   let chatInfo = null
//
//   if(props.messages === null){
//     chatInfo = <h1>No current chat selected</h1>
//   } else {
//     chatInfo = props.messages.map((m) => <p id={m.id}>{m.content}</p>)
//   }
//   {console.log(chatInfo)}
//   return (
//
//     <div className="active-chat">
//
//         {chatInfo}
//         <NewMessageForm chat={props.chat} messageDraftListener={props.messageDraftListener} handleNewMessageSubmit={props.handleNewMessageSubmit} activeChatId={props.activeChatId}/>
//
//
//     </div>
//   )
// }


export default ActiveChat
