import React from 'react'
import Friend from './Friend'



const FriendList = ({user, friends, chats}) => {

  return(
    <div className="friendList">
      <ul>
        {friends.map((b) => {
          return <Friend friend={b} key={b.user_id}  />
        })}
      </ul>
    </div>
  )
}

export default FriendList
