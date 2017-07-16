import React, { Component } from 'react'
import StopSearch from './StopSearch'

class AddCardForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: '',
      stopId: '',
    }

    this.selectStop = this.selectStop.bind(this)
    this.updateName = this.updateName.bind(this)
    this.add = this.add.bind(this)
  }

  updateName(event) {
    this.setState({name: event.target.value})
  }

  selectStop(stopId) {
    this.setState({stopId: stopId})
  }

  add(){
    this.props.addCard({name: this.state.name, stopId: this.state.stopId})
    this.props.close()
  }

  render() {
    return (<div>
      <h3>Add Card</h3>
      <input type="text" value={this.state.name} onChange={this.updateName} />
      <StopSearch selectStop={this.selectStop} />
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.add } >Add</a>
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.props.close} >Close</a>
      </div>
    </div>)
  }
}

AddCardForm.propTypes = {
  close: React.PropTypes.func,
  addCard: React.PropTypes.func
}

export default AddCardForm
