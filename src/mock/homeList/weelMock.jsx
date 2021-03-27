import { DSkeleton } from '../constants/weel'

const WeelMock = [
  {
    name: '骨架屏',
    value: DSkeleton
  },
  {
    name: '防抖',
    value: 'Debounce'
  },
  {
    name: '节流',
    value: 'Throttle'
  },{
    name: '跨域',
    children: [
      {
        name: ' 同源策略',
        value: 'KCros'
      },{
        name: '跨域场景',
        value: 'Karea'
      },{
        name: 'jsonp',
        value: 'Kjsonp'
      }
    ]
  },{
    name: '加解密',
    value: 'Secret'
  }
]
export default WeelMock