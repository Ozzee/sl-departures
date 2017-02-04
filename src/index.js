import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import departuresApp from './reducers';
import App from './components/App';

/*global require module document*/

require('file?name=[name].[ext]!./index.html');

let store = createStore(departuresApp);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);


if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}