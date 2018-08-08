import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import './styles/style.css';
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
