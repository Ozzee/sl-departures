'use strict'

const fetch = require('isomorphic-fetch')
const logger = require('bucker').createLogger()

/*eslint-env node*/
/*elint-global console */

const apiKeyRealtime = process.env.SL_REAL
const apiKeyPlats = process.env.SL_PLATS


function getStop(stopId, callback) {
  fetch('http://api.sl.se/api2/realtimedeparturesV4.json?key='+apiKeyRealtime+'&timewindow=60&siteid=' + stopId)
        .then(response => response.json())
        .then(json => {
          if (json.StatusCode !== 0) {
            logger.error(json.Message)
            callback(new Error('[500] Internal Server Error'))
          } else {
            const data = {
              time: json.ResponseData.LatestUpdate,
              departures: json.ResponseData.Metros.map((stop) => {
                return {line: stop.LineNumber, destination: stop.Destination, time: stop.DisplayTime, direction: stop.JourneyDirection}
              })}
            
            callback(null, data)
          }
        })
        .catch((error) => logger.error(error))
}

function searchStops(q, callback) {
  fetch('http://api.sl.se/api2/typeahead.json?key='+apiKeyPlats+'&searchstring='+q+'&stationsonly=true&maxresults=10')
    .then(response => response.json())
    .then(json => {
      if(json.StatusCode !== 0){
        logger.error(json.Message)
        callback(new Error('[500] Internal Server Error'))
      } else {
        callback(null, json.ResponseData.map((stop) => {
          return {
            "name": stop.Name,
            "stopId": stop.SiteId
          }
        }))
      }
    })
}

module.exports.stop = (event, context, callback) => {
  const stopId = parseInt(event.path.id)
  if (isNaN(stopId)) {
    callback(null, {statusCode: 400})
  } else {
    getStop(stopId, callback)
  }
}

module.exports.search = (event, context, callback) => {
  searchStops(event.path.q, callback)
}
