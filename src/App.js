import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import netlifyIdentity from 'netlify-identity-widget'

import LandingPage from './views/Landing'
import Dashboard from './views/Dashboard'
import Expenses from './views/Expenses'
import NotFoundPage from './views/404'
import { getExpenses, addExpense } from './utils/hasura'
import history from './utils/history'
import './App.css'
import withRoot from './withRoot'
import requireAuth from './utils/requireAuth'

class App extends Component {
  state = {
    expenses: [],
    userID: '',
    isAuthenticated: false,
  }

  componentWillMount() {
    if (netlifyIdentity.currentUser()) {
      this.setState({
        userID: netlifyIdentity.currentUser().id,
        isAuthenticated: true,
      })

      getExpenses(netlifyIdentity.currentUser().id)
        .then(data => this.setState({ expenses: data.data.expense }))
        .catch(e => console.log(e))
    }
  }

  handleLogin = () => {
    this.setState({
      isAuthenticated: true,
      userID: netlifyIdentity.currentUser().id,
    })
    getExpenses(this.state.userID)
      .then(data => this.setState({ expenses: data.data.expense }))
      .catch(e => console.error(e))
    history.push('/dashboard')
    netlifyIdentity.close()
  }

  handleLogout = () => {
    this.setState({ isAuthenticated: false, expenses: [], userID: '' })
  }

  addNewExpense = expense => {
    let expenseWithUserID = expense
    expenseWithUserID.userID = netlifyIdentity.currentUser().id
    addExpense(expenseWithUserID)
      .then(res => {
        expenseWithUserID.id = res.data.insert_expense.returning[0].id
        this.setState({ expenses: [...this.state.expenses, expenseWithUserID] })
      })
      .catch(e => console.log(e))
  }

  render() {
    netlifyIdentity.on('login', this.handleLogin)
    netlifyIdentity.on('logout', this.handleLogout)
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <LandingPage isAuthenticated={this.state.isAuthenticated} />
              )}
            />
            <Route
              path="/dashboard"
              component={requireAuth(
                Dashboard,
                this.state.expenses,
                this.state.isAuthenticated
              )}
            />
            <Route
              path="/expenses"
              component={requireAuth(
                Expenses,
                this.state.expenses,
                this.state.isAuthenticated,
                this.addNewExpense
              )}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default withRoot(App)
