import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/es/storage'; // 默认localStorage
import session from 'redux-persist/es/storage/session'; // 默认sessionStorage



const middlewares = [
  thunkMiddleware
]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const persistConfig = {
  key: 'root',
  storage: session,
  // blacklist: ['counter'] //数组，可去除不要的本地数据
}

// if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
//   middlewares.push(require('redux-logger').createLogger())
// }

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

export default function configStore () {
  const store = createStore(persistReducer(persistConfig, rootReducer), enhancer);
  const persistor = persistStore(store);
  return { store, persistor}
}
