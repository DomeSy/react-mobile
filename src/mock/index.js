import homeList from './homeList'
import jsMock from './jsMock'
import { Mock } from '@unilts'

Mock.get({url: 'homeList', list: homeList, message: '返回首页数据成功'})

Mock.get({url: 'js', message: '返回数据成功', children: jsMock})

