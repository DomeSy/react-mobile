import homeList from './homeList'
import reactMock from './reactMock'
import componentMock from './componentMock'
import webMock from './webMock'
import jsMock from './jsMock'
import algorithmMock from './algorithmMock'
import highOrderMock from './highOrderMock'
import weelMock from './weelMock'
import { Mock } from '@unilts'

Mock.get({url: 'homeList', list: homeList, message: '返回首页数据成功'})

Mock.get({url: 'react', message: '返回数据成功', children: reactMock})
Mock.get({url: 'component', message: '返回数据成功', children: componentMock})
Mock.get({url: 'web', message: '返回数据成功', children: webMock})
Mock.get({url: 'js', message: '返回数据成功', children: jsMock})
Mock.get({url: 'algorithm', message: '返回数据成功', children: algorithmMock})
Mock.get({url: 'highOrder', message: '返回数据成功', children: highOrderMock})
Mock.get({url: 'wheel', message: '返回数据成功', children: weelMock})

