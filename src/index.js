import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';
import './index.css';
// import Text from './components/Text';
import registerServiceWorker from './registerServiceWorker';
const initialState = {};
const store = configureStore(initialState, history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
