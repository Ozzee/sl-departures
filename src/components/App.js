import React, { Component } from 'react'
import styles from './App.css'
import Stops from '../containers/stops'
import About from '../components/About'
import Clock from '../components/Clock'
import Add from '../components/Add'
import ReactGA from 'react-ga'
/*global document*/


class App extends Component {

  openAbout() {
    ReactGA.event({category: 'About', action: 'Open About'})
    document.getElementById('about').style = 'display: flex;'
  }

  render() {
    return (
      <div className={styles.app}>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left"><img className={styles.logo} src="/images/icon-192x192.png" width="48" height="48"/></a>
            <ul className={styles.center}><li><Clock /></li></ul>
            <ul className="right"><li><a href="#" onClick={this.openAbout}>About</a></li></ul>
          </div>
        </nav>
        <Stops />
        <About />
        <Add />
      </div>
    )
  }
}

export default App