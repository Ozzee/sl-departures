import React, { Component } from 'react'
import Departures from '../containers/departures'
import Updated from '../containers/updated'
 
class Card extends Component {
  render() {
    return (
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{this.props.card.name}</span>
                    <Updated stopId={this.props.card.stopId} />
                    <Departures card={this.props.card} />
                </div>
            </div>
    )
  }
}

Card.propTypes = {
  card: React.PropTypes.object
}

export default Card
