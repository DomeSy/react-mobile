import homeList from './homeList'
import { scrollList } from './mockList'
import { Mock } from '@/utils'

Mock.get({url: 'homeList', list: homeList, message: '返回首页数据成功'})
Mock.get({url: 'ant/scrollList', list: scrollList, message: '返回数据成功', flag: true})
