import React, { Component } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export default class Login extends Component {
  handleLogIn = () => {
    console.log('click')
    netlifyIdentity.open()
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogIn}>Log in with netlify</button>
      </div>
    )
  }
}
