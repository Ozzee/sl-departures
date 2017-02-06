import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {
  render() {
    return (<div className="row">
            <div className="col s12 m6">
              {this.props.stops.map((stop) => <Card stop={stop} />)}
            </div>
      </div>)
  }
}

Cards.propTypes = {
  stops: React.PropTypes.array
}

export default Cards
