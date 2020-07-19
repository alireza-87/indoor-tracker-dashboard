import roomReducer from './roomReducer'
import authReducer from './authReducer'
import mqttReducer from './mqttReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    room:roomReducer,
    auth:authReducer,
    mqtt:mqttReducer
})

export default rootReducer