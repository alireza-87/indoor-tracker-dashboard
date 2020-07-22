import authReducer from './authReducer'
import roomsReducer from './roomsReducer'
import commandReducer from './commandReducer'
import PersonReducer from './personReducer'

import { combineReducers } from 'redux'
import { users } from '../actions/personsAction'

const rootReducer = combineReducers({
    auth:authReducer,
    room:roomsReducer,
    command:commandReducer,
    users:PersonReducer
})

export default rootReducer