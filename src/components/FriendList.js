import React from 'react'
import Friend from './Friend'



const FriendList = ({username, userId, friends}) => {
  return(
    <div>
      <ul>
        {friends.map((b) => {
          return <Friend username={username} userId={userId} friend={b} username={b.username} key={b.id} />
        })}
      </ul>
    </div>
  )
}

export default FriendList
