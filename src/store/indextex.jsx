import { createStore } from 'redux';
import reducer from '../reducer';//引入deducer文件
import {persistStore, persistReducer} from 'redux-persist';
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session'
// import storage from 'redux-persist/lib/storage'; //localStorage机制
//import { AsyncStorage } from 'react-native'; //react-native
// 数据对象
const storageConfig = {
    key: 'root', // 必须有的
    storage:storageSession, // 缓存机制
    blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
}
const myPersistReducer = persistReducer(storageConfig, reducer)
const store = createStore(myPersistReducer)
export const persistor = persistStore(store)
export default store