'use strict'

/*eslint-env node*/

const Hapi = require('hapi')
const fetch = require('isomorphic-fetch')
const logger = require('bucker').createLogger()


const apiKey = process.env.SL_KEY

const server = new Hapi.Server()
server.connection({ port: 3000, host: 'localhost' })

server.route({
  method: 'GET',
  path: '/stop/{stopId}',
  handler: function (request, reply) {
    logger.info('Requesting stop: ' + request.params.stopId)
    fetch('http://api.sl.se/api2/realtimedeparturesV4.json?key='+apiKey+'&timewindow=60&siteid=' + request.params.stopId)
        .then(response => response.json())
        .then(json => {
          if (json.StatusCode !== 0) {
            logger.error(json.Message)
          } else {
            logger.debug(json.ResponseData)
            const data = {departures: json.ResponseData.Metros.map((stop) => {
              return {line: stop.LineNumber, destination: stop.Destination, time: stop.DisplayTime}
            })}
            
            return reply(data).header('Access-Control-Allow-Origin', 'http://localhost:9000')
          }
        })
        .catch((error) => logger.error(error))
  }
})

server.start((err) => {

  if (err) {
    throw err
  }
  logger.info(`Server running at: ${server.info.uri}`)
})

