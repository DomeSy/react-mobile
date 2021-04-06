import { DSkeleton } from '../constants/weel'

const WeelMock = [
  {
    name: '方法',
    children: [
      {
        name: 'concat',
        value: 'newConCat'
      },
      {
        name: 'object.assign()',
        value: 'newAssign'
      },
      {
        name: 'call和apply',
        value: 'newApplyCall'
      },
      {
        name: 'typeof和instanceof',
        value: 'newTypeof'
      },
      {
        name: 'hash和history',
        value: 'newHash'
      }
    ]
  },
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