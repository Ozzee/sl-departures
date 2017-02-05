import React, { Component } from 'react';
import moment from 'moment';
import styles from './DeparturesTable.css';

class DeparturesTable extends Component {

  departing(timeString) {
    return moment(timeString).diff(moment()) < 60*1000 ? styles.departing : ''
  }

    render() {
        return (<table>
                    <thead>
                    <tr>
                        <th data-field="line">Line</th>
                        <th data-field="destination">Destination</th>
                        <th data-field="departure">Departure</th>
                    </tr>
                    </thead>

                    <tbody>
                        { this.props.departures.map(departure => 
                            <tr key={departure.time+departure.line+departure.destination}>
                              <td>{departure.line}</td>
                              <td>{departure.destination}</td>
                              <td className={this.departing(departure.time)}>{moment(departure.time).format('HH:mm')}</td>
                            </tr> )}
                    </tbody>
                </table>);
    }
}

DeparturesTable.propTypes = {
  departures: React.PropTypes.arrayOf(React.PropTypes.shape(
    {
      line: React.PropTypes.string, 
      destination: React.PropTypes.string,
      time: React.PropTypes.string
    }))
}

export default DeparturesTable;