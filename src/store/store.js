import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import {middleware} from './mqttMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,middleware('http://127.0.0.1:3002'))))

export default store