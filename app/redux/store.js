
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { createStore, applyMiddleware } from 'redux'

import reducers from './rootReducers'

import promiseMiddleware from 'redux-promise-middleware';

import { composeWithDevTools } from 'remote-redux-devtools';

import thunk from 'redux-thunk'


const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)


const store = createStore(
  reducers,
    applyMiddleware(middleware,thunk)
);

export default store
