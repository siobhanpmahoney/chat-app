import React from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props)
    return(
      <div>
        {this.props.friend.username}
      </div>
    )
  }
}

export default Friend
