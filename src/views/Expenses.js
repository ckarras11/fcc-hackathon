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
  openEdit = e => {
    console.log('click')
    this.setState({
      modal: true,
      item: e,
    })
  }

  render() {
    let test
    this.state.modal ? (test = <FormDialog open edit />) : (test = '')
    return (
      <Layout>
        {test}
        <h1>Expenses</h1>
        <p>Welcome to expenses!</p>
        <List component="nav">
          {this.props.expenses &&
            this.props.expenses.map(expense => (
              <ListItem
                button
                key={expense.id}
                /* onClick={e => <FormDialog open edit name={expense.name} />} */
                // onClick={e => console.log(expense)}
                onClick={e => this.openEdit(e)}
              >
                <ListItemText>
                  {expense.name} - ${expense.amount}
                </ListItemText>
              </ListItem>
            ))}
        </List>
        <FormDialog onAddExpense={this.props.onAddExpense} add={true} />
      </Layout>
    )
  }
}

/* const Expenses = props => {
  console.log(modal)
  return (
    <Layout>
      <h1>Expenses</h1>
      <p>Welcome to expenses!</p>
      <List component="nav">
        {props.expenses &&
          props.expenses.map(expense => (
            <ListItem
              button
              key={expense.id}
              
            >
              <ListItemText>
                {expense.name} - ${expense.amount}
              </ListItemText>
            </ListItem>
          ))}
      </List>
      <FormDialog onAddExpense={props.onAddExpense} add={true} />
    </Layout>
  )
}

export default Expenses */
