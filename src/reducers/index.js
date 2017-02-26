import { combineReducers } from 'redux'
import { RECEIVE_STOP_DATA } from '../actions'

/**
 * This file contains the reducesrs that will generate the new state based on
 * actions they receive.
 */

const cards = () => {
  return [
    {
      name: 'Fruängen',
      stopId: '9260',
      lines: [{
        number: '14',
        direction: 1
      }]
    }
  ]
}

/*
 * Filter new stop information and add them to the new state
 */
const schedules = (state, action) => {
  switch (action.type) {
  case RECEIVE_STOP_DATA:
    var a = {}
    a[action.stop] = {
      latestUpdate: action.data.time,
      departures: action.data.departures
    }
    return a
    
  default:
    return state == undefined ? {schedules: []} : state
  }
}

const departuresApp = combineReducers({
  cards,
  schedules
})

export default departuresApp