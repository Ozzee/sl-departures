import React, { Component } from 'react';
import DeparturesTable from './DeparturesTable';
 
class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Fruängen</span>
                    <DeparturesTable />
                </div>
            </div>
        );
    }
}

export default Card;
