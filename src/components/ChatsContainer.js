import React from "react";
import ChatList from './ChatList'
import ActiveChat from './ActiveChat'

class ChatsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeChatMessages: null
    }
  }

  render() {

    return (
      <div className="chats-container">
        <ActiveChat messages={this.state.activeChatMessages} />
        <ChatList chats={this.props.chats} onClick={this.updateActiveChat}/>
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
        activeChatMessages: json.messages
      })
    })
  }
}
export default ChatsContainer
