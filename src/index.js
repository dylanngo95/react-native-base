import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './stores/saga';

import LoginComponent from './features/login/login.component';

import { LoginReducer } from './features/login/login.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ login: LoginReducer }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default () => (
  <Provider store={store}>
    <LoginComponent />
  </Provider>
);
