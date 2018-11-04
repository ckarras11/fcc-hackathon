import React from 'react'
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
// @material-ui/icons
import AddIcon from '@material-ui/icons/Add'
import Close from '@material-ui/icons/Close'
// core components
import Button from '@material-ui/core/Button'

import modalStyle from './modalStyle'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }
  handleClickOpen(modal) {
    var x = []
    x[modal] = true
    this.setState(x)
  }
  handleClose(modal) {
    var x = []
    x[modal] = false
    this.setState(x)
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.button}
        >
          <AddIcon onClick={() => this.handleClickOpen('modal')} />
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal,
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose('modal')}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose('modal')}
            >
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Modal title</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
          >
            <h5>Are you sure you want to do this?</h5>
          </DialogContent>
          <DialogActions
            className={classes.modalFooter + ' ' + classes.modalFooterCenter}
          >
            <Button onClick={() => this.handleClose('modal')}>
              Never Mind
            </Button>
            <Button onClick={() => this.handleClose('modal')} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(modalStyle)(Modal)
