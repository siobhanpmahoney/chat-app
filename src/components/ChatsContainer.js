import React from "react";
import ChatList from './ChatList'
import ActiveChat from './ActiveChat'

class ChatsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeChatMessages: null,
      activeChat: null,
      toggleActiveChat: false
    }
  }

  render() {
    return (
      <div className="chatsContainer">

        <div className="activeChatContainer">
          <ActiveChat user={this.props.user} chat={this.state.activeChat} messages={this.state.activeChatMessages}  handleNewMessageSubmit={this.handleNewMessageSubmit} handleCloseChat={this.handleCloseChat} />
          </div>

        <ChatList chats={this.props.chats} user={this.props.user} onClick={this.updateActiveChat}  activeChatMessages={this.state.activeChatMessages} activeChatId={this.state.chatId} messageDraftListener={this.messageDraftListener} handleNewMessageSubmit={this.handleNewMessageSubmit} />
      </div>
    )
  }

  updateActiveChat = (selectChat) => {
    this.fetchActiveChatInfo(selectChat)
  }

  fetchActiveChatInfo = (chat) => {
    fetch(`http://localhost:3000/api/v1/chats/${chat.id}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        activeChatMessages: json.messages,
        activeChat: chat
      })
    })
  }




  handleNewMessageSubmit = (event, chat, message) => {
    event.preventDefault()


    let newMessage = {content: message, chat_id: chat.id, user_id: this.props.user.id, chat: chat}

    const url = 'http://localhost:3000/api/v1/chats/' + this.state.activeChat.id +'/messages';
    console.log(url);
    fetch(url,
    {
      method: 'post',
      headers:{
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
    },
      body: JSON.stringify({
        messages: {
          content: message,
          chat_id: chat.id,
          user_id: this.props.user.id,
          chat: chat
        }
      })
    })
    .then((response) => response.json())
    .then(json => {
      this.addResponseToState(json)
    })
  }

  addResponseToState = (json) => {

    let currentMessageState = this.state.activeChatMessages.slice()
    this.setState({
      activeChatMessages: [...currentMessageState, json[json.length-1]]
    })
  }

  toggleActiveChat = (chat) = {
    let status = !this.state.toggleActiveChat
    this.setState({
      toggleActiveChat: status
    }),
  }



}
export default ChatsContainer
