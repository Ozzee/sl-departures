import React, { Component } from 'react'
import moment from 'moment'
import styles from './DeparturesTable.css'
import _ from 'lodash'

/*global setInterval clearInterval*/

/**
 * This component shows a table with the next departures for a chosen stop with
 * certain lines.
 */

class DeparturesTable extends Component {

  constructor(props) {
    super(props)
    this.state = {currentTime: moment()}
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({currentTime: moment()}), 1000)

    this.props.updateDepartures('1234')
  }

  componentWillUnmount() {
    clearInterval(this.timer)
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

DeparturesTable.propTypes = {
  card: React.PropTypes.object,
  departures: React.PropTypes.arrayOf(React.PropTypes.shape(
    {
      line: React.PropTypes.string, 
      destination: React.PropTypes.string,
      time: React.PropTypes.string,
      direction: React.PropTypes.number
    })),
  updateDepartures: React.PropTypes.func
}

export default DeparturesTable