import React, { Component } from 'react';
import moment from 'moment';
import styles from './DeparturesTable.css';

/*global setInterval clearInterval*/


class DeparturesTable extends Component {

  constructor(props) {
    super(props);
    this.state = {currentTime: moment()};
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({currentTime: moment()}), 1000);

    this.props.updateDepartures('1234');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  departing(timeString) {
    const diff = moment(timeString).diff(moment());
    if (diff < 0) {
      return styles.departed;
    } else if (diff < 60*1000) {
      return styles.departing;
    } else {
      return '';
    }
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
    })),
  updateDepartures: React.PropTypes.func
}

export default DeparturesTable;