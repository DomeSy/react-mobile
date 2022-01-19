import axios from 'axios'
import qs from 'qs'
import { host } from '../config';

/**
 * @module axios请求封装
 * @param payload 请求参数
 * @param method 请求方式(默认get)
 * @param url部分地址 
 */
axios.defaults.timeout = 20000;
// @ts-ignore
// axios.defaults?.headers['ContentType'] = 'application/json'; 

async function Axios(payload:any = {},{method = 'get', url = '', path = false}:any){

  return new Promise((resolve, reject) => {
    axios({
      method,
      url: path ? path : `${host}${url}`,
      params: method == 'post' ? qs.stringify(payload) : payload,
    }).then(data => {
      resolve(data.data?.data ? data.data.data : data.data)
    }).catch(err => {
      console.log(err, '----')
    })
  })
}

export default Axios;