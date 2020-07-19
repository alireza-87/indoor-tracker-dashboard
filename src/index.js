import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../src/store/reducers/rootReducer'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {middleware} from './store/mqttMiddleware'

const store = createStore(rootReducer,applyMiddleware(thunk,middleware('ws://broker.mqttdashboard.com:8000/mqtt')))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
