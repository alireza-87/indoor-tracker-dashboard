import authReducer from './authReducer'
import roomsReducer from './roomsReducer'
import commandReducer from './commandReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth:authReducer,
    room:roomsReducer,
    command:commandReducer
})

export default rootReducer