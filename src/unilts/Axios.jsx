import axios from 'axios'
import qs from 'qs'

/**
 * @module axios请求封装
 * @param {*} param0 
 */

axios.defaults.headers['ContentType'] = 'application/x-www-form-urlencoded'; 
axios.defaults.timeout = 20000;
async function Axios(params = {},{method = 'get', url = ''}){

  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      params: method == 'post' ? qs.stringify(params) : params,
    }).then(data => {
      resolve(data)
    }).catch(err => {
      console.log(err, '----')
    })
  })
}

export default Axios;