import React from 'react'

class LoginForm extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" placeholder="Username" />
          <input type="submit" name="Submit" />
        </form>
      </div>
    )
  }
}

export default LoginForm
