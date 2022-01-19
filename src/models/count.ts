import { Axios } from "@/utils"
import type { Effect } from 'dva-type';

async function getInfo(payload:any) {
  return await Axios({}, {url: payload.data})
}


interface CountProps {
  namespace: string,
  state: {
    [key: string]: any;
  },
  effects: {
    setAdd: Effect,
    setNumber: Effect,
    asyncAdd: Effect,
  },
  reducers: any
}

const Count:CountProps ={
  namespace: 'count',
  state: {
    count: 0, 
  },
  effects: {
    *setAdd({ payload }, {call, put, select}){
      yield put({
        type: 'getAdd'
      })
    },
    *setNumber({ payload }, {call, put, select}){
      yield put({
        type: 'getNumber',
        count: payload
      })
    },
    *asyncAdd({ payload }, {call, put, select}){
      const res = yield call(getInfo, { data: 'homeList'})
      if(res){
        console.log('11')
        yield put({
          type: 'getAdd',
          async: true
        })
      }
    }
  },
  reducers: {
    getAdd(state:any, payload:any) {
      console.log(payload)
      return {
        count: state.count + 1,
        async: payload.async ? payload.async : undefined
      }
    },
    getNumber(state:any, payload:any) {
      return {
        count: payload.count
      }
    },
    setSubtract(state:any, payload:any) {
      return {
        count: state.count - 1
      }
    },
  },
}

export default Count
