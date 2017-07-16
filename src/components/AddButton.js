import React, { Component } from 'react'
import styles from './AddButton.css'

class AddButton extends Component {
  render() {
    return (<div className="fixed-action-btn" >
              <a id={styles.add} className="btn-floating btn-large waves-effect waves-light red" onClick={this.props.openAdd}><i className="material-icons">add</i></a>
            </div>)
  }
}

AddButton.propTypes = {
  openAdd: React.PropTypes.func
}

export default AddButton
