import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const initialState = {};
const middleware = [thunk]
const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(
        persistedReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
            compose
        )
    )
    
const persistor = persistStore(store)

export default {store,persistor}
 
