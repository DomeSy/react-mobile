
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
 */
class MockDate {
  static get = ({url='', message='成功', list = [], children = []}) => {
    Mock.mock(RegExp(`/api/${url}` + '.*') , 'get', (options) => {
      if(children.length != 0){
        const query = urlData.parse(options.url, true).query;
        for(let i = 0;i < children.length; i++){
          if(JSON.stringify(query) === JSON.stringify(children[i].params)){
            return {
              status: 200,
              message: children[i].message || message,
              'data': [...children[i].list] || []
            }
          }
        }
        return FailData
      }else{
        return {
          status: 200,
          message,
          'data': [...list]
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