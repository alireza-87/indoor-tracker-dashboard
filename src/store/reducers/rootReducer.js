import authReducer from './authReducer'
import roomsReducer from './roomsReducer'
import commandReducer from './commandReducer'
import PersonReducer from './personReducer'
import resultReducer from './resultReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth:authReducer,
    room:roomsReducer,
    command:commandReducer,
    users:PersonReducer,
    result:resultReducer
})

export default rootReducer