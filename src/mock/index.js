import homeList from './home/homeList'
import { Mock } from '@unilts'

Mock.get({url: 'homeList', list: homeList, message: '返回首页数据成功'})
// Mock.get({url: 'homeList', message: '返回首页数据成功', children: [
//   {
//     params: {
//       id: '1',
//       iid: '2'
//     },
//     list: homeList
//   }
// ]})