require('./scss/main.scss');

const ipcRenderer = window.require('electron').ipcRenderer;
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router'
import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import appReducers from './reducers/appReducers';

import {checkSetup} from './actions/setupActions.js';
import routes from './routes.jsx';

const reducer = combineReducers({app: appReducers});
const store = compose(applyMiddleware(reduxThunk.withExtraArgument(ipcRenderer), reduxLogger()))(createStore)(reducer);
store.dispatch(checkSetup()).then(() => {
  // render after getting the setup status
  if(!store.getState().app.setup.complete) {
    hashHistory.push('/setup');
  } else {
    hashHistory.push('/');
  }
  ReactDOM.render((
      <Provider store={store}>
          <Router history={hashHistory} routes={routes} />
      </Provider>
  ), document.getElementById('container'));
});
