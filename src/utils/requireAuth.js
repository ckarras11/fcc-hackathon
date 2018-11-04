import React, { Component } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import history from './history'

export default function requireAuth(
  ComposedComponent,
  data,
  isAuthenticated,
  add = ''
) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!isAuthenticated) {
        history.push('/')
        netlifyIdentity.open()
      }
    }

    render() {
      return <ComposedComponent data={data} onAddExpense={add} />
    }
  }

  return Authenticate
}
