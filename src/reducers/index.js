import { combineReducers } from 'redux'

import ip from './ip'
import ua from './userAgent'

export default combineReducers({ ip, ua })