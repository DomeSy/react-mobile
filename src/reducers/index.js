import { combineReducers } from 'redux'
import counter from './counter'
import home from './home'

export default combineReducers({
  home,
  counter,
})