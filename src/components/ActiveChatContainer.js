import React from 'react';
import ActiveChat from './ActiveChat'

// (user, chats, friends,  addResponseToState)

class ActiveChatContainer extends React.Component {
  constructor(props) {
    super(props)


    }


  render() {

          return (
            <div>
            { this.props.chat &&
            <ActiveChat user={this.props.user} chat={this.props.chat} messages={this.props.messages}  handleNewMessageSubmit={this.props.handleNewMessageSubmit} handleCloseChat={this.props.handleCloseChat} /> }
            </div>
          )
        }
    }
  

export default ActiveChatContainer
