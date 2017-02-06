import { combineReducers } from 'redux'
import { RECEIVE_STOP_DATA } from '../actions'

const cardsReducer = () => {
  return {cards: [{name: 'Fruängen', stopId: '9260', updating: false, error: false},{name: 'Slussen', stopId: '9192', updating: false, error: false}]}
}

const stopsReducer = (state, action) => {
  switch (action.type) {
  case RECEIVE_STOP_DATA:
    var s = {}
    s[action.stop] = action.data.departures
    return Object.assign({}, state, {
      stops: s
    })
    
  default:
    if (state == undefined) {
      return {stops: {}}
    } else {
      return state
    }
  }
}

const departuresApp = combineReducers({
  cardsReducer,
  stopsReducer
})

export default departuresApp