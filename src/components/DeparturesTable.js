import React, { Component } from 'react';

class DeparturesTable extends Component {
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
                              <td>{departure.time}</td>
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