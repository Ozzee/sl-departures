import React, { Component } from 'react'
import styles from './RemoveButton.css'

class RemoveButton extends Component {
  render() {
    return (<i className={styles.button + ' material-icons'} onClick={this.props.remove}>delete</i>)
  }
}

RemoveButton.propTypes = {
  remove: React.PropTypes.func
}

export default RemoveButton
