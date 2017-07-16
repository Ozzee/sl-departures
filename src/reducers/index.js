import { RECEIVE_STOP_DATA, START_UPDATING_STOP, REMOVE_CARD, ADD_CARD } from '../actions'

/**
 * This file contains the reducesrs that will generate the new state based on
 * actions they receive.
 */

export const cards = (state, action) => {
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
    newCard.cardId = state[state.length-1].cardId + 1
    return state.concat([newCard]) //TODO: check if this actually mutates state...
  default:
    return state == undefined ? initial : state
  }
}

/*
 * Filter new stop information and add them to the new state
 */
export const schedules = (state, action) => {
  switch (action.type) {
  case RECEIVE_STOP_DATA:
    var newState = Object.assign({}, state)
    newState[action.stop] = {
      latestUpdate: action.data.time,
      departures: action.data.departures,
      updating: false
    }
    return newState

  case START_UPDATING_STOP:
    var newState2 = Object.assign({}, state)
    if (!newState2[action.stop]) {
      newState2[action.stop] = {}
    }
    newState2[action.stop].updating = true
    return newState2

  default:
    return state == undefined ? {} : state
  }
}
