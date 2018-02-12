import React from 'react';
import FriendList from './FriendList'
import ChatsContainer from './ChatsContainer'

class UserPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {id: 42, username: "Orisa"},
      friends: [
        {user_id: 15, username: "Genji"},
        {user_id: 32, username: "Hanzo"},
        {user_id: 82, username: "Zenyatta"},
        {user_id: 92, username: "Ana"},
        {user_id: 103, username: "McCree"},
        {user_id: 128, username: "Mercy"},
        {user_id: 142, username: "Zarya"},
        {user_id: 199, username: "Mei"},
        {user_id: 224, username: "Reinhardt"},
        {user_id: 240, username: "Torbjorn"}
      ],
      chats: [
        {
          chat_id: 23,
          users_ids: [42, 32, 249],
          messages: [
            {message_id: 82, content: "Love, D.va", user_id: 42, username:"Orisa", sent: "2018-02-09 15:53:10"},
            {message_id: 87, content: "You know my name", user_id: 32, username: "Hanzo", sent: "2018-02-09 15:53:10"},
            {message_id: 107, content: "Overconfidence is a flimsy shield", user_id: 42, username:"Orisa", sent: "2018-02-11 17:30:00"},
            {message_id: 134, content: "I'm the one who does his job. I'm thinking, you're...", user_id: 32, username: "Hanzo", sent: "2018-02-11 17:30:51"},
            {message_id: 178, content: "Hammer Down!", user_id: 32, username: "Hanzo", sent: "2018-02-11 17:30:52"},
            {message_id: 220, content: "Fire in the hole!", user_id: 42, username: "Orisa", sent: "2018-02-11 17:30:54"},
            {message_id: 255, content: "Yolo offal locavore direct trade trust fund etsy.", user_id: 32, username: "Hanzo", sent: "2018-02-11 17:36:10"},
            {message_id: 309, content: "Twee viral mumblecore kickstarter tilde kogi.", user_id: 240, username: "Torbjorn", sent: "2018-02-11 17:36:22"}
          ]
        },
        {
          chat_id: 51,
          user_ids: [42, 240],
          messages: [
            {message_id: 186, content: "No one can hide from my sight", user_id: 42, username:"Orisa", sent: "2018-02-11 17:30:52"},
            {message_id: 338, content: "I simply imagine that my skeleton is me and my bod...", user_id: 240, username: "Torbjorn", sent: "2018-02-11 17:37:47"},
            {message_id: 340, content: "Let me ask you. How fast do you think you could je...", user_id: 42, username:"Orisa", sent: "2018-02-11 17:37:47"}
          ]
        },
        {
          chat_id: 64,
          user_ids: [142, 42],
          messages: [
            {message_id: 145, content: "You're just a glitch in the system", user_id: 142, username: "Zarya", sent: "2018-02-11 17:30:51"},
            {message_id: 160, content: "Justice ain't gonna dispense itself", user_id: 42, username:"Orisa", sent: "2018-02-11 17:30:52"},
            {message_id: 214, content: "Die! Die! Die!", user_id: 142, username: "Zarya", sent: "2018-02-11 17:30:53"}
          ]
        },
        {
          chat_id: 110,
          user_ids: [103, 199, 42, 128],
          messages: [
            {
              message_id: 404, content: "If they don't meet, they won't fall in love, they won't get married and they won't have kids. That's why your older brother's disappearing from that photograph. Your sister will follow, and unless you repair the damage, you'll be next.", user_id: 103, username: "McCree", sent: "2018-02-11 19:56:25"
            },
            {
              message_id: 512, content: "This woman hates me so much, I’m starting to like her.", user_id: 199, username: "Mei", sent: "2018-02-11 20:55:56"
            },
            {
              message_id: 513, content: "Serenity now!", user_id: 128, username: "Mercy"
            },
            {
              message_id: 514, content: "I had a dream last night that a hamburger was eating me.", user_id: 199, username: "Mei", sent: "2018-02-11 17:30:53"
            },
            {
              message_id: 515, content: "And you want to be my latex salesman.", user_id: 42, username:"Orisa", sent: "2018-02-11 17:20:53"
            },
            {
              message_id: 516, content: "See, this is what the holidays are all about. Three buddies sitting around chewing gum.", user_id: 199, username: "Mei", sent: "2018-02-11 17:10:53"
            }
          ]
        }
      ],
      openChats: []
    }
  }

  chatCardClickListener = (chat) => {
    debugger
    let currentOpenChats = this.state.openChats.slice()
    this.setState({
      openChats: [...currentOpenChats, chat]
    })
  }


  handleNewMessageSend = (event, user, chat, message) => {
    event.preventDefault()
    debugger
    console.log(message)
    console.log(this.state.user.username)
    let newMessage = {message_id: 100, content: message, user_id: this.state.user.id, username: this.state.user.username, sent: Date.now()}
    let newChats = this.state.chats.map((c) => {
      if (c.chat_id === chat.chat_id) {
        const newMessages = c.messages.slice();
        newMessages.push(newMessage);
        return {
          ...c,
          messages: newMessages,
        }
      } else {
        return c;
      }
    })

    this.setState({
      chats: newChats
    });

    // let i = this.state.chats.indexOf(chat)
    // console.log(i)

    // // console.log(`newMessage: ${newMessage}`)
    // let currentMessages = this.state.chats[i].messages
    // console.log(`currentMessages: ${currentMessages}`)
    // let newChats = this.state.chats.slice();
    // console.log(this.state.chats.indexOf(chat))
    //   console.log(`newChats: ${newChats}`)
    // newChats[i] = [...currentMessages, newMessage]
    // this.setState({
    //   chats: newChats
    // })
  }





  render() {
    return (
      <div>
        <FriendList user={this.state.user} friends={this.state.friends} chats={this.state.chats} />

      <ChatsContainer user={this.state.user}
        friends={this.state.friends}
        chats={this.state.chats}
        chatCardClickListener={this.chatCardClickListener}
        openChats = {this.state.openChats}
        handleNewMessageSend = {this.handleNewMessageSend} />

      </div>
    )
  }

}

export default UserPage
