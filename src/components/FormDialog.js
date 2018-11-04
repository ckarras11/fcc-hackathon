import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Select from '@material-ui/core/Select'
import AddIcon from '@material-ui/icons/Add'

export default class FormDialog extends React.Component {
  state = {
    open: this.props.open,
    add: this.props.add,
    edit: this.props.edit,
    name: this.props.name,
    description: this.props.description,
    date: this.props.date,
    amount: this.props.amount,
    type: this.props.type,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  addExpense = expense => {
    if (
      this.state.name &&
      this.state.description &&
      this.state.date &&
      this.state.amount &&
      this.state.type
    ) {
      let expense = {
        name: this.state.name,
        description: this.state.description,
        date: this.state.date,
        amount: parseInt(this.state.amount),
        type: this.state.type,
      }
      this.props.onAddExpense(expense)
      this.handleClose()
    } else {
      alert('All fields are required')
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    // console.log(e.target.name + ': ' + e.target.value)
  }

  render() {
    return (
      <div>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Expense</DialogTitle>
          <DialogContent>
            <DialogContentText />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              name="name"
              type="text"
              fullWidth
              required
              value={this.state.name}
              onChange={this.onChange}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              name="description"
              type="text"
              fullWidth
              required
              value={this.state.description}
              onChange={this.onChange}
            />
            <div className="form__wrapper">
              <TextField
                margin="dense"
                id="amount"
                label="Amount"
                name="amount"
                type="number"
                required
                value={this.state.amount}
                onChange={this.onChange}
              />
              <TextField
                margin="dense"
                id="date"
                label="Date"
                name="date"
                type="date"
                required
                value={this.state.date}
                onChange={this.onChange}
              />
              <Select
                native
                name="type"
                required
                value={this.state.type}
                onChange={this.onChange}
                style={{ marginTop: '4px', marginBottom: '4px' }}
              >
                <option defaultValue>Type</option>
                <option value="gas">Gas</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="lodging">Lodging</option>
                <option value="technology">Technology</option>
              </Select>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            {this.state.add && (
              <Button onClick={this.addExpense} color="primary">
                Add
              </Button>
            )}
            {this.state.edit && (
              <Button onClick={this.addExpense} color="primary">
                Edit
              </Button>
            )}
            {this.state.edit && (
              <Button onClick={this.addExpense} color="secondary">
                Delete
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

FormDialog.defaultProps = {
  open: false,
  add: false,
  edit: false,
  name: '',
  description: '',
  date: new Date().toISOString().slice(0, 10),
  amount: 0,
  type: '',
}
