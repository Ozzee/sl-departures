import { combineReducers } from 'redux'
import { RECEIVE_STOP_DATA } from '../actions'

const cardsReducer = () => {
  return {cards: [
    {
      name: 'Fruängen',
      stopId: '9260',
      updating: false,
      error: false,
      lines: [{
        line: '14',
        direction: 1
      }]
    },
    {
      name: 'Slussen',
      stopId: '9192',
      updating: false,
      error: false,
      lines: [{
        line: '14',
        direction: 2
      },
      {
        line: '14',
        direction: 1
      }]
    }]}
}

/*
 * Filter new stop information and add them to the new state
 */
const scheduleReducer = (state, action) => {
  switch (action.type) {
  case RECEIVE_STOP_DATA:
    var newState = Object.assign({}, state)
    newState.stops[action.stop] = action.data.departures
    return newState
    
  default:
    return state == undefined ? {stops: {}} : state
  }
}

const departuresApp = combineReducers({
  cardsReducer,
  scheduleReducer
})

export default departuresApp