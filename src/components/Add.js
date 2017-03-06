import React, { Component } from 'react'
import styles from './Add.css'

class Add extends Component {
  render() {
    return (<div className="fixed-action-btn" >
              <a id={styles.add} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>)
  }
}

export default Add