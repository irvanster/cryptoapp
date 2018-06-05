import { combineReducers } from 'redux'

import nav from './nav'
import { btcReducer,adxReducer   } from '../modules/markets/reducers/index'
const appReducer = combineReducers({
  nav,
  btcReducer,adxReducer
})

export default appReducer
