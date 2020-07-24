import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import {middleware} from './mqttMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const initStore = () =>{
    const persistConfig = {
        key: 'rootsotrage',
        storage,
        blacklist: ['room',"command","users"]
      }
    const persistedReducer = persistReducer(persistConfig, rootReducer )
    const middlewarea= composeWithDevTools(applyMiddleware(thunk,middleware('http://127.0.0.1:3002')));
    const store = createStore(persistedReducer,middlewarea)
    let persistor = persistStore(store)
    return { persistor, store };
}
export default initStore