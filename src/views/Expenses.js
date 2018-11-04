import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Layout from '../components/layout'
import FormDialog from '../components/FormDialog'

export default class Expenses extends Component {
  state = {
    modal: false,
    item: {},
  }

  render() {
    return (
      <Layout>
        <h1>Expenses</h1>
        <p>Welcome to expenses!</p>
        <List component="nav">
          {this.props.data &&
            this.props.data.map(expense => (
              <ListItem button key={expense.id}>
                <ListItemText>
                  {expense.name} - ${expense.amount}
                </ListItemText>
              </ListItem>
            ))}
        </List>
        <FormDialog onAddExpense={this.props.onAddExpense} />
      </Layout>
    )
  }
}
