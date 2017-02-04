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
                        <tr>
                            <td>14</td>
                            <td>Mörby Centrum</td>
                            <td>11:30</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Mörby Centrum</td>
                            <td>11:40</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Mörby Centrum</td>
                            <td>11:50</td>
                        </tr>
                    </tbody>
                </table>);
    }
}

export default DeparturesTable;