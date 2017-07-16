import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import ReactGA from 'react-ga'

import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import * as reducers from './reducers'
import App from './components/App'

/**
 * This is the starting point of the app
 */

/*global require module document DEV window */

/* Copy these files to the dist folder as is */
require('file?name=[name].[ext]!./index.html')
require('file?name=[name].[ext]!./manifest.json')

/* Google Anaytics */
ReactGA.initialize('UA-67849479-2')
ReactGA.pageview(window.location.pathname)

/* LocalStorage to save state */
const departuresApp = storage.reducer(combineReducers(reducers))
const engine = createEngine('departures-app')
const storageMiddleware = storage.createMiddleware(engine)

/* Apply logger only in dev */
let store = DEV ? createStore(departuresApp, applyMiddleware(thunkMiddleware, storageMiddleware, createLogger())) : createStore(departuresApp, applyMiddleware(thunkMiddleware, storageMiddleware))

const load = storage.createLoader(engine)
load(store)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)


if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
