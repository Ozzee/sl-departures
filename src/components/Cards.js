import React, { Component } from 'react'
import Card from './Card'

/**
 * This component is a wrapper for all the cards shown in the app
 */

class Cards extends Component {
  render() {
    return (<div className="row">
            <div className="col s12 m6">
              {this.props.cards.map((card) => <Card key={card} card={card} />)}
            </div>
      </div>)
  }
}

Cards.propTypes = {
  cards: React.PropTypes.array
}

export default Cards
