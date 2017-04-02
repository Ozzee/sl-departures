import { combineReducers } from 'redux'
import { RECEIVE_STOP_DATA, START_UPDATING_STOP, REMOVE_CARD, ADD_CARD } from '../actions'

/**
 * This file contains the reducesrs that will generate the new state based on
 * actions they receive.
 */

const cards = (state, action) => {
  const initial = [{
    name: 'Fruängen',
    stopId: '9260',
    cardId: 0,
    lines: [{
      number: '14',
      direction: 1
    }]
  }]
  

  switch (action.type) {
  case REMOVE_CARD:
    return state.filter((card) => card.cardId !== action.cardId)
  case ADD_CARD:
    var newCard = Object.assign({}, action.card)
    newCard.cardId = state.length
    return state.concat([newCard]) //TODO: check if this actually mutates state...
  default:
    return state == undefined ? initial : state
  }
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
      departures: action.data.departures,
      updating: false
    }
    return a

  case START_UPDATING_STOP:
    var b = Object.assign({}, state)
    if (!b[action.stop]) {
      b[action.stop] = {}
    }
    b[action.stop].updating = true

    return b

  default:
    return state == undefined ? {schedules: []} : state
  }
}

const departuresApp = combineReducers({
  cards,
  schedules
})

export default departuresApp