import React from 'react';
import Chat from './Chat'

class Friend extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chatHistory: [
        "message1", "message2"
      ]
    }
  }

  render() {

    return(
      <div>

    <Chat chatHistory={this.state.chatHistory} friend={this.props.friend} username={this.props.username} userId={this.props.userId}/>

      </div>
    )
  }
}

export default Friend
