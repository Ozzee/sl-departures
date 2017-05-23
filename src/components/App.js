import React, { Component } from 'react'
import ReactGA from 'react-ga'

import styles from './App.css'

import Stops from '../containers/stops'
import About from '../components/About'
import Modal from '../components/Modal'
import Clock from '../components/Clock'
import AddButton from '../components/AddButton'
import Add from '../containers/add'

/*eslint-env browser*/


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      addOpen: false
    }

    this.openAbout = this.openAbout.bind(this)
    this.closeAbout = this.closeAbout.bind(this)

    this.openAdd = this.openAdd.bind(this)
    this.closeAdd = this.closeAdd.bind(this)
  }

  openAbout() {
    ReactGA.event({category: 'About', action: 'Open About'})
    this.setState({aboutOpen: true})
  }

  closeAbout() {
    ReactGA.event({category: 'About', action: 'Close About'})
    this.setState({aboutOpen: false})
  }

  openAdd() {
    ReactGA.event({category: 'Add', action: 'Open Add'})
    this.setState({addOpen: true})
  }

  closeAdd() {
    ReactGA.event({category: 'Add', action: 'Close Add'})
    this.setState({addOpen: false})
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
        <Modal isOpen={this.state.aboutOpen}>
          <About close={this.closeAbout} />
        </Modal>
        <AddButton openAdd={this.openAdd} />
        <Modal isOpen={this.state.addOpen} >
          <Add close={this.closeAdd} />
        </Modal>
      </div>
    )
  }
}

export default App