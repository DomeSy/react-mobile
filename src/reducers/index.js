import { combineReducers } from 'redux'
import counter from './counter'
import home from './home'
import detail from './detail'

export default combineReducers({
  home,
  counter,
  detail
})