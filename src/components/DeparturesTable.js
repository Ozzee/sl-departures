import React, { Component } from 'react'
import moment from 'moment'
import styles from './DeparturesTable.css'
import _ from 'lodash'

/**
 * This component shows a table with the next departures for a chosen stop with
 * certain lines.
 */


class DeparturesTable extends Component {

  componentDidMount() {
    this.props.updateDepartures()
  }

  departing(timeString) {
    const diff = moment(timeString).diff(moment())
    if (diff < 0) {
      return styles.departed
    } else if (diff < 60*1000) {
      return styles.departing
    } else {
      return ''
    }
  }

  departures(departures, stop) {
    if (departures) {
      return _.flatMap(stop.lines, (l)=>{
        return _.filter(departures, (d) => {
          return d.line === l.number && d.direction === l.direction
        })
      })
    } else {
      return []
    }
  }

  render() {
    const departures = this.departures(this.props.departures, this.props.card)
    if (this.props.updating) {
      return (<div className="progress">
                  <div className="indeterminate"></div>
              </div>)
    } else {
      return (<table>
                      <thead>
                      <tr>
                          <th data-field="line">Line</th>
                          <th data-field="destination">Destination</th>
                          <th data-field="departure">Departure</th>
                      </tr>
                      </thead>

                      <tbody>
                          { departures.map(departure => 
                              <tr key={departure.time+departure.line+departure.destination}>
                                <td>{departure.line}</td>
                                <td>{departure.destination}</td>
                                <td>{departure.time}</td>
                              </tr> )}
                      </tbody>
                  </table>)
    }
  }
}

DeparturesTable.propTypes = {
  card: React.PropTypes.object,
  departures: React.PropTypes.arrayOf(React.PropTypes.shape(
    {
      line: React.PropTypes.string, 
      destination: React.PropTypes.string,
      time: React.PropTypes.string,
      direction: React.PropTypes.number
    })),
  updateDepartures: React.PropTypes.func,
  updating: React.PropTypes.bool
}

export default DeparturesTable