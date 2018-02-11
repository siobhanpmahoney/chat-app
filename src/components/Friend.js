import React from 'react';
import Chat from './Chat'

class Friend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="friend">
        <h4>{this.props.friend.username}</h4>
      </div>
    )
  }
}

export default Friend
