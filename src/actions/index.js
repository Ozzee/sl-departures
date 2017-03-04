import fetch from 'isomorphic-fetch'
import moment from 'moment'
/*global API_ROOT */

/* Add a SL public transit stop
export const ADD_STOP = 'ADD_STOP'
function addStop(stop) {
  return {
    type: ADD_STOP,
    stop
  }
}
*/

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
    const limit = moment().subtract(30, 'seconds') // 30s ago
    const updated = moment(timestamp)
    if (updated.isBefore(limit)){
      dispatch(fetchStop(stopId))
    }
  }
}