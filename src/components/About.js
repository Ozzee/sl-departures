import React, { Component } from 'react'


/*eslint-env browser*/


class About extends Component {

  render() {
    return (
          <div>
            <h4>About</h4>
            <p>This site is not affiliated with SL in any way. It only uses the APIs available at <a href="https://www.trafiklab.se/api">trafiklab.se</a></p>
            <ul>
              <li>Developed by <a href="http://ehnstrom.fi" target="_blank">Oskar Ehnström</a></li>
              <li>Source: <a href="https://github.com/Ozzee/sl-departures" target="_blank">GitHub</a></li>
              <li>With support from the <a href="https://spiceprogram.org/" target="_blank">Spice Program</a></li>
            </ul>
          
          <div>
            <span onClick={this.props.close} className="modal-action modal-close waves-effect waves-green btn-flat">Close</span>
          </div>
        </div>
    )
  }
}

About.propTypes = {
  close: React.PropTypes.func
}

export default About