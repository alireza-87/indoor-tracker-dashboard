import authReducer from './authReducer'
import roomsReducer from './roomsReducer'
import commandReducer from './commandReducer'
import PersonReducer from './personReducer'
import resultReducer from './resultReducer'
import activityReducer from './acitivityReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth:authReducer,
    room:roomsReducer,
    command:commandReducer,
    users:PersonReducer,
    result:resultReducer,
    activity:activityReducer
})

export default rootReducer