'use strict';

const Hapi = require('hapi')
const fetch = require('isomorphic-fetch')

const apiKey = process.env.SL_KEY;

const server = new Hapi.Server()
server.connection({ port: 3000, host: 'localhost' })

server.route({
    method: 'GET',
    path: '/stop/{stopId}',
    handler: function (request, reply) {
      fetch('http://api.sl.se/api2/realtimedeparturesV4.json?key='+apiKey+'&timewindow=30&siteid=' + request.params.stopId)
        .then(response => response.json())
        .then(json => {
          const data = {departures: json.ResponseData.Metros.map((stop) => {
            return {line: stop.LineNumber, destination: stop.Destination, time: stop.DisplayTime}
          })}
          return reply(data).header('Access-Control-Allow-Origin', 'http://localhost:9000')
        });
    }
})

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

