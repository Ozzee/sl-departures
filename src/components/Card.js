import React, { Component } from 'react'
import Departures from '../containers/departures'
 
class Card extends Component {
  render() {
    return (
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{this.props.stop.name}</span>
                    <Departures stop={this.props.stop} />
                </div>
            </div>
    )
  }
}

Card.propTypes = {
  stop: React.PropTypes.object
}

export default Card
