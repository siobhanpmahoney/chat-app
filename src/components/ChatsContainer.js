import React from "react";
import ChatList from './ChatList'
import OpenChats from './OpenChats'



class ChatsContainer extends React.Component {


  render() {

    return (
      <div>

        <OpenChats user={this.props.user} friends={this.props.friends} chats={this.props.chats} chatCardClickListener = {this.props.chatCardClickListener} openChats = {this.props.openChats} handleNewMessageSend = {this.props.handleNewMessageSend}/>


        <ChatList user={this.props.user} friends={this.props.friends} chats={this.props.chats} chatCardClickListener = {this.props.chatCardClickListener}  />

      </div>
    )
  }
}

export default ChatsContainer
