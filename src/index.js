import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import ReactGA from 'react-ga'

import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import departuresApp from './reducers'
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

/* Apply logger only in dev */
let store = DEV ? createStore(departuresApp, applyMiddleware(thunkMiddleware, createLogger())) : createStore(departuresApp, applyMiddleware(thunkMiddleware))

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