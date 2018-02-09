import React from 'react'
import Friend from './Friend'



const FriendList = ({username, friends, userId}) => {
  console.log(friends)
  return(
    <div>
        {friends.map((b) => {
          return <div><Friend friend={b} key={b.userId} /></div>
        })}

</div>

  )
}

export default FriendList
