'use strict'

/*eslint-env node*/

const Hapi = require('hapi')
const fetch = require('isomorphic-fetch')
const logger = require('bucker').createLogger()
const Inert = require('inert')


const apiKey = process.env.SL_REAL

const server = new Hapi.Server()
server.connection({ port: 3000, host: 'localhost' })
server.register(Inert, () => {})


server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'dist',
      listing: true
    }
  }
})

server.route({
  method: 'GET',
  path: '/stop/{stopId}',
  handler: function (request, reply) {
    const stopId = parseInt(request.params.stopId)
    if (isNaN(stopId)) {
      logger.error('Malformed stopId: ' + request.params.stopId)
      return reply('bad request').code(401)
    }

    logger.info('Requesting stop: ' + stopId)    
    fetch('http://api.sl.se/api2/realtimedeparturesV4.json?key='+apiKey+'&timewindow=60&siteid=' + stopId)
        .then(response => response.json())
        .then(json => {
          if (json.StatusCode !== 0) {
            logger.error(json.Message)
          } else {
            logger.debug(json.ResponseData)
            const data = {departures: json.ResponseData.Metros.map((stop) => {
              return {line: stop.LineNumber, destination: stop.Destination, time: stop.DisplayTime, direction: stop.JourneyDirection}
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

