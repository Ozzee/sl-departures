import fetch from 'isomorphic-fetch'
import moment from 'moment'
import ReactGA from 'react-ga'

/**
 * Actions.
 * 
 * These need to either return an action or a function that will at some point return an action.
 */


/*global API_ROOT */

export const START_UPDATING_STOP = 'START_UPDATING_STOP'
function startUpdatingStop(stop) {
  return {
    type: START_UPDATING_STOP,
    stop
  }
}

export const RECEIVE_STOP_DATA = 'RECEIVE_STOP_DATA'
function receiveStopData(stop, data) {
  return {
    type: RECEIVE_STOP_DATA,
    stop,
    data
  }
}


export function fetchStop(stop) {
  return function(dispatch) {
    dispatch(startUpdatingStop(stop))
    return fetch(API_ROOT + 'stop/' +stop)
      .then(response => response.json())
      .then(json => dispatch(receiveStopData(stop, json)))
  }
}

export function checkData(timestamp, stopId) {
  return function(dispatch) {
    ReactGA.event({category: 'Stops', action: 'Check Data'})
    const limit = moment().subtract(30, 'seconds') // 30s ago
    const updated = moment(timestamp)
    if (updated.isBefore(limit)){
      dispatch(fetchStop(stopId))
    }
  }
}

export const ADD_CARD = 'ADD_CARD'
export function addCard(card) {
  return function(dispatch) {
    dispatch({type: ADD_CARD, card: card})
  }
}

export const REMOVE_CARD = 'REMOVE_CARD'
export function removeCard(id) {
  return function(dispatch) {
    ReactGA.event({category: 'Cards', action: 'Remove Card'})
    dispatch({
      type: REMOVE_CARD,
      cardId: id
    })
  }
}
