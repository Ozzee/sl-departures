'use strict'

const fetch = require('isomorphic-fetch')
const logger = require('bucker').createLogger()

/*eslint-env node*/
/*elint-global console */

const apiKey = process.env.SL_REAL


function getStop(stopId, callback) {
  fetch('http://api.sl.se/api2/realtimedeparturesV4.json?key='+apiKey+'&timewindow=60&siteid=' + stopId)
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

module.exports.stop = (event, context, callback) => {
  const stopId = parseInt(event.path.id)
  if (isNaN(stopId)) {
    callback(null, {statusCode: 400})
  } else {
    getStop(stopId, callback)
  }
}
