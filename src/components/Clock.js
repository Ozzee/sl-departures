import React, { Component } from 'react'
import styles from './Clock.css'
import moment from 'moment'

/*global setInterval*/

class Clock extends Component {
  
  constructor(props) {
    super(props)
    this.state = {currentTime: moment()}
  }

  componentDidMount(){
    setInterval(() => this.setState({currentTime: moment()}),1000)
  }
  
  render() {
    return (<span className={styles.title}>{this.state.currentTime.format('H:mm:ss')}</span>)
  }
}

export default Clock