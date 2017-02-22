import React, { Component } from 'react'

class UpdatedTime extends Component {
  render(){
    return (<span>{this.props.time}</span>)
  }
}

UpdatedTime.propTypes = {
  time: React.PropTypes.string
}

export default UpdatedTime