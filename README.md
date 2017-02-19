# SL Departures

A simple progressive web app for showing the next departures of transit stops in the Stockholm reginal transit network.

To get any real data you need to register and apply for an API key at: https://www.trafiklab.se/api

## Development

* Install npm dependencies
* Start develeopment server: `npm start`

## Environment

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `AWS_REGION`
  * e.g. `eu-west-1`
* `DEV`
  * `true` when developing, otherwise false
* `API_ROOT`
  * Your back end root
* `SL_ORIGINS`
  * `*` when developing, otherwise the URI to your site
