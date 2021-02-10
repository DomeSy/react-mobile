import { Axios, Modal } from '@unilts';

/**
 * @module redux请求接口封装
 * @param url 部分地址
 * @param path 完全地址
 * @param payload 请求参数
 * @param type 类型
 * @param cb 增加原有返回上的数据
 * @param method 请求方式，默认get
 */
export default function createAction({url, path = false, payload = {}, type, cb, method = 'get'}){
  return async (dispatch) => {
    const res = await Axios(payload, {method, url, path});
    const { status, message } = res;
    if(status === 200 || status === '200'){
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    }else{
      Modal(message)
    }
  }
}