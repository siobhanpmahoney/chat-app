import React from 'react';

class NewMessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messageText: ""
    }
  }

  messageDraftListener = (event) => {
    let draft = event.target.value
    this.setState({
      messageText: draft
    })
  }

  messageSend = () => {

    let user = this.props.user
    let chat = this.props.chat
    let message = this.state.messageText
    this.props.handleNewMessageSend(user, chat, message)
  }

  render() {
    return (
      <div className="newMessageForm">
        <input type="text" onChange={this.messageDraftListener}/>
        <button onClick={this.messageSend}>Send</button>
      </div>
    )
  }
}


export default NewMessageForm
