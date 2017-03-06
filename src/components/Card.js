import React, { Component } from 'react'
import Departures from '../containers/departures'
import Updated from '../containers/updated'
import Remove from '../containers/remove'

/**
 * This component is a card shown in the app.
 */
 
class Card extends Component {
  render() {
    return (
            <div className="card">
                <div className="card-content">
                  <Remove cardId={this.props.card.cardId}/>
                    <span className="card-title">{this.props.card.name}</span>
                    <Departures card={this.props.card} />
                    <Updated stopId={this.props.card.stopId} />
                </div>
            </div>
    )
  }
}

Card.propTypes = {
  card: React.PropTypes.object,
  updateCard: React.PropTypes.func
}

export default Card
