import { combineReducers } from 'redux'

import nav from './nav'
import contactsReducer from '../contacts/reducers'
import { btcReducer,adxReducer   } from '../modules/markets/reducers/index'
const appReducer = combineReducers({
  nav,
  contactsReducer,
  btcReducer,adxReducer
})

export default appReducer
