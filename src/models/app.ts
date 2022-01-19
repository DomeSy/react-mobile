import { getList } from './services'
import type { Effect } from 'dva-type';

interface AppProps {
  namespace: string,
  state: {
    [key: string]: any;
  },
  effects: {
    getList: Effect
  },
  reducers: any
}

const App:AppProps = {
  namespace: 'app',
  state: {
    listHome: [],
    active: {}
  },
  effects: {
    *getList({ payload }:any, {call, put, select}:any,){
      const res = yield call(getList, { data: 'homeList'})
      yield put({
        type: 'setList',
        list: res
      })
    },
  },
  reducers: {
    setList(state:any, payload:any) {
      return {
        ...state,
        listHome: payload.list
      }
    },
  },
}

export default App
