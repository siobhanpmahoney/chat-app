import React from "react";
import ChatList from './ChatList'
import ActiveChat from './ActiveChat'

class ChatsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeChatMessages: null,
      chatId: null
    }
  }

  render() {
    return (
      <div className="chats-container">

        <ChatList chats={this.props.chats} user={this.props.user} onClick={this.updateActiveChat}  activeChatMessages={this.state.activeChatMessages} activeChatId={this.state.chatId} messageDraftListener={this.messageDraftListener} handleNewMessageSubmit={this.handleNewMessageSubmit} />
      </div>
    )
  }

  updateActiveChat = (e) => {
    let id = e.target.dataset.id

    this.fetchActiveChatInfo(id)
  }

  fetchActiveChatInfo = (id) => {
    fetch(`http://localhost:3000/api/v1/chats/${id}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        activeChatMessages: json.messages,
        chatId: id
      })
    })
  }




  handleNewMessageSubmit = (event, chat, message) => {
    event.preventDefault()


    let newMessage = {content: message, chat_id: chat.id, user_id: this.props.user.id, chat: chat}


    fetch('http://localhost:3000/api/v1/chats/' + this.state.chatId +'/messages',
    {
      method: 'post',
      headers:{
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
    },
      body: JSON.stringify({
        messages: {content: message, chat_id: chat.id, user_id: this.props.user.id, chat: chat}
      })
    })
    .then((response) => response.json())
    .then(json => {
      
      this.addResponseToState(json)
    })
  }

  addResponseToState = (json) => {
    console.log(json.content)
    debugger
    let currentMessageState = this.state.activeChatMessages
    this.setState({
      activeChatMessages: [...currentMessageState, json.contet]
    })
  }


}
export default ChatsContainer
