import roomReducer from './roomReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    room:roomReducer,
    auth:authReducer

})

export default rootReducer