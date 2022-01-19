const { REACT_APP_ENV } = process.env
let host = '/api/'

// 可配置正式环境域名
if (REACT_APP_ENV === 'pre') {
  host =  '/api/';
}

export { host }