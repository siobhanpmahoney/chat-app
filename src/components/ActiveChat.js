import React from 'react';
import NewMessageForm from './NewMessageForm'
import { ActionCable } from 'react-actioncable-provider'

class ActiveChat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleActiveStatus: false
    }
  }

  renderNoChats = () => {
    return(
      <div><h1>No current chat selected</h1></div>
    )
  }

  closeChat = () => {
    let toggle = !this.state.toggleActiveStatus
    this.setState({
      toggleActiveStatus: toggle
    })
  }



  renderChatHTML = () => {
    return(
      <div className="activeChatWindow">

        {this.props.messages.map((m) => {

          return <div key={m.id}><b>{this.props.user.username}</b>: {m.content}</div>
        })}
          <NewMessageForm chat={this.props.chat} messageDraftListener={this.props.messageDraftListener} handleNewMessageSubmit={this.props.handleNewMessageSubmit} activeChatId={this.props.activeChatId}/>
      </div>
    )
  }



  render() {
    debugger
    return (
      <div>
        <ActionCable channel={{channel: 'FeedChannel'}} onReceived={ () => {
            console.log('callin back yungin\' hoo hoo')
          }
        } />
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
