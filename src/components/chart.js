import { PieChart } from 'react-easy-chart'
import Tooltip from '@material-ui/core/Tooltip'

import React, { Component } from 'react'

export default class chart extends Component {
  constructor(props) {
    super(props)
    this.state = { open: true }
  }

  mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: e.y,
      left: e.x,
      value: d.value,
      key: d.data.key,
    })
    console.log(this.state)
  }
  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({ top: e.y, left: e.x })
    }
  }

  mouseOutHandler() {
    this.setState({ showToolTip: false })
    console.log(this.state)
  }

  render() {
    return (
      <React.Fragment>
        <PieChart
          data={this.props.data}
          innerHoleSize={200}
          mouseOverHandler={this.mouseOverHandler.bind(this)}
          mouseOutHandler={this.mouseOutHandler.bind(this)}
          mouseMoveHandler={this.mouseMoveHandler.bind(this)}
          padding={10}
          styles={this.styles}
        />
      </React.Fragment>
    )
  }
}
