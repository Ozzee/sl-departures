import React, { Component } from 'react'
import styles from './UpdatedTime.css'

/**
 * This component displays a static time of when a stop was updated.
 */

class UpdatedTime extends Component {
  render(){
    return (<div className={styles.updatedTime} onClick={this.props.updateCard}>
              <span className={styles.time}>{this.props.time} &nbsp;</span>
              <i className="material-icons">cached</i>
            </div>)
  }
}

UpdatedTime.propTypes = {
  time: React.PropTypes.string,
  updateCard: React.PropTypes.func
}

export default UpdatedTime