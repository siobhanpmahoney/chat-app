import React from 'react'

class NewMessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messageText: ""
    }
  }

  messageDraftListener = (event) => {
    event.preventDefault()
      let draft = event.target.value

      this.setState({
        messageText: draft
      })
    }

    messageSend = (event) => {
      event.preventDefault()

      let chat = this.props.chat
      let message = this.state.messageText
      this.props.handleNewMessageSubmit(event, chat, message)
      event.target.parentElement.childNodes[0].value = ""
    }


  render(){

    return(
      <div className="openChatForm">
        <input type="text" onChange={this.messageDraftListener}/>
        <button onClick={this.messageSend}>Send</button>
      </div>
    )
  }
}

export default NewMessageForm
