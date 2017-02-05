import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {
  render() {
    return (<div className="row">
            <div className="col s12 m6">
              <Card />
            </div>
      </div>)
  }
}

export default Cards
