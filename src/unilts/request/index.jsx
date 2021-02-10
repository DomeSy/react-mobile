import axios from 'axios'
import qs from 'qs'

// 公用地址
const local = '/api/'

/**
 * @module axios请求封装
 * @param payload 请求参数
 * @param method 请求方式
 * @param url部分地址 
 */
axios.defaults.headers['ContentType'] = 'application/x-www-form-urlencoded'; 
axios.defaults.timeout = 20000;
async function Axios(payload = {},{method = 'get', url = '', path = false}){

  return new Promise((resolve, reject) => {
    axios({
      method,
      url: path ? path : `${local}${url}`,
      params: method == 'post' ? qs.stringify(payload) : payload,
    }).then(data => {
      resolve(data.data)
    }).catch(err => {
      console.log(err, '----')
    })
  })
}

export default Axios;