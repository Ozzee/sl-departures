import React, { Component } from 'react'
import Departures from '../containers/departures'
 
class Card extends Component {
  render() {
    return (
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Fruängen</span>
                    <Departures stopId="9260" />
                </div>
            </div>
    )
  }
}

export default Card
