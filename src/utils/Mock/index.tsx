
import Mock from 'mockjs'
import urlData from 'url'

// 未请求到数据
const FailData = {
  status: 404,
  mesage: '未找到对应数据，请检查具体入参'
}

/**
 * @module mock请求
 * 
 * @param url 请求地址
 * @param message 返会信息提示语
 * @param list 返会的数据（无请求参数时）
 * @param children 有请求参数时的数据
 * 
 * @children的参数
 * @param params 请求的参数
 * @param list 对应的数据
 * @param message 对应的返会数据
 * @param extra 对象，额外的参数
 */

class MockDate {
  static get = ({url='', message='成功', list = [], flag = false}: any) => {
    Mock.mock(RegExp(`/api/${url}` + '.*') , 'get', (options:any) => {
      if(flag){
      const query = urlData.parse(options.url, true).query;
      const res = list(query)
      return {
        status: 200,
        message,
        'data': res
      }
      }else{
        return {
          status: 200,
          message,
          'data':list
        }
      }
    })
  }

  static post = ({url='', message='成功', list = []}) => {
    Mock.mock(`/api/${url}`, 'post', {
      status: 200,
      message,
      'data': [...list]
    })
  }

}

export default MockDate