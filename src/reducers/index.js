import { combineReducers } from 'redux'

import warning from './warning'
import entities from './entities'
import ui from './ui'

export default combineReducers({
  entities,
  ui,
  warning,
})
