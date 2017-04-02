import React, { Component } from 'react'

class AddCardForm extends Component {

  render() {
    return (<div>
      <input type="text" placeholder="Stop name" />
      <button>Search</button>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.props.close} >Close</a>
      </div>
    </div>)
  }
}

AddCardForm.propTypes = {
  close: React.PropTypes.func
}

export default AddCardForm