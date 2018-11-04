import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Layout from '../components/layout'
import Modal from '../components/modal'

let data = [
  { id: 1, kind: 'Dining', value: 100, color: '#aaac84' },
  { id: 2, kind: 'Food', value: 200, color: '#dce7c5' },
  { id: 3, kind: 'Gas', value: 50, color: '#e3a51a' },
]

const Expenses = () => (
  <Layout>
    <h1>Expenses</h1>
    <p>Welcome to expenses!</p>
    <List component="nav">
      {data &&
        data.map(expense => (
          <ListItem button key={expense.id}>
            <ListItemText primary={expense.kind} />
          </ListItem>
        ))}
    </List>
    <Modal />
  </Layout>
)

export default Expenses
