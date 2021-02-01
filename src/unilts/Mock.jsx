
import Mock from 'mockjs'

/**
 * 模拟请求
 */
class MockDate {

  static get = ({url='', message='成功', list = []}) => {
    Mock.mock(`/api/${url}`, 'get', {
      status: 200,
      message,
      'data': [...list]
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
