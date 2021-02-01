import homeList from './home/homeList'
import { Mock } from '@unilts'

Mock.get({url: 'homeList', list: homeList, message: '返回首页数据成功'})