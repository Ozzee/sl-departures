import React, { Component } from 'react'
import styles from './UpdatedTime.css'

/**
 * This component displays a static time of when a stop was updated.
 */

class UpdatedTime extends Component {
  render(){
    return (<span className={styles.updatedTime} >{this.props.time}</span>)
  }
}

UpdatedTime.propTypes = {
  time: React.PropTypes.string
}

export default UpdatedTime