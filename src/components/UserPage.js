import React from "react";

class UserPage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      friends: [],
      myFriends: []
    }
  }

  componentDidMount(){
    // if (this.props.user) {
    //   fetch('http://localhost:3000/api/v1/friends')
    //   .then(response => response.json())
    //   .then(json => console.log)
    // }
  }

  render() {
    return (
      <div>
        Hello Motha Fucka
      </div>
    )
  }
}
export default UserPage
