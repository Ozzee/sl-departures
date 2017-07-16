import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

/*global API_ROOT */


class LinePicker extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      availableLines: []
    }

  }

  componentDidMount() {
    var that = this
    return fetch(API_ROOT + 'lines/' + this.props.stopId)
          .then(response => response.json())
          .then(json => that.setState({availableLines: json}))
  }

  
  render() {
    return (<div></div>)
  }
}

LinePicker.propTypes = {
  stopId: React.PropTypes.string,
  setLines: React.PropTypes.func
}

export default LinePicker
