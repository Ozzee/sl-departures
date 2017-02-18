import React, { Component } from 'react'
import styles from './About.css'

/*global document*/


class About extends Component {
  closeAbout() {
    document.getElementById('about').style = ''
  }

  render() {
    return (
      <div id="about" className={styles.aboutWrapper}>
        <div style={{display: 'block', position: 'static'}} className="modal"> 
          <div className="modal-content">
            <h4>About</h4>
            <p>This site is not affiliated with SL in any way. It only uses the APIs available at <a href="https://www.trafiklab.se/api">trafiklab.se</a></p>
            <ul>
              <li>Developed by <a href="http://ehnstrom.fi" target="_blank">Oskar Ehnström</a></li>
              <li>Source: <a href="https://github.com/Ozzee/sl-departures">GitHub</a></li>
              <li>With support from the <a href="https://spiceprogram.org/" target="_blank" >Spice Program</a></li>
            </ul>
          </div>
          <div className="modal-footer">
            <span onClick={this.closeAbout} className="modal-action modal-close waves-effect waves-green btn-flat">Close</span>
          </div>
        </div>
      </div>
    )
  }
}

export default About