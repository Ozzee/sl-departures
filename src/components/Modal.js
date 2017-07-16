import React, { Component } from 'react'
import ReactModal from 'react-modal'
import styles from './Modal.css'

class Modal extends Component {
  render() {
    return (
      <ReactModal isOpen={this.props.isOpen} overlayClassName={styles.overlay}>
        {this.props.children}
      </ReactModal>
    )
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.bool,
  children: React.PropTypes.element
}

export default Modal
