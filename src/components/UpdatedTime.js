import React, { Component } from 'react'
import styles from './UpdatedTime.css'

/**
 * This component displays a static time of when a stop was updated.
 */


/*global document setInterval */

class UpdatedTime extends Component {
  componentDidMount() {
    var that = this // TODO: Learn how to do this properly

    setInterval(() => {
      this.props.checkData()
    }, 30*1000)
    
    document.addEventListener("visibilitychange", function() {
      if (document.visibilityState === 'visible') {
        that.props.checkData()
      }
    })
  }



  render(){
    return (<div className={styles.updatedTime} onClick={this.props.updateCard}>
              <span className={styles.time}>{this.props.time}&nbsp;</span>
              <i className="material-icons">cached</i>
            </div>)
  }
}

UpdatedTime.propTypes = {
  time: React.PropTypes.string,
  timestamp: React.PropTypes.string,
  updateCard: React.PropTypes.func,
  checkData: React.PropTypes.func,
  stopId: React.PropTypes.string
}

export default UpdatedTime