import React from 'react';
import FriendList from './FriendList'
import ChatsContainer from './ChatsContainer'

class UserPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logged_in: false
    }
  }

  //chat fetch

  //friend fetch




  render() {
    console.log(this.props)
    return (
      <div>
            <div>
            <div className="friendContainer">

               <FriendList user={this.props.user} friends={this.props.friends} chats={this.props.chats} />
               <ChatsContainer user={this.props.user} friends={this.props.friends} chats={this.props.chats}/>

            </div>
          </div>
      </div>
  )
  }
}

export default UserPage
