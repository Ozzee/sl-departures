import React, { Component } from 'react'
import styles from './App.css'
import Stops from '../containers/stops'
import About from '../components/About'

/*global document*/


class App extends Component {

  openAbout() {
    document.getElementById('about').style = 'display: flex;'
  }

  render() {
    return (
      <div className={styles.app}>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left"><img className={styles.logo} src="/images/icon-192x192.png" width="48" height="48"/></a>

            <ul id="nav-mobile" className="right">
              <li><a href="#" onClick={this.openAbout}>About</a></li>
            </ul>
          </div>
        </nav>
        <Stops />
        <About />
      </div>
    )
  }
}

export default App