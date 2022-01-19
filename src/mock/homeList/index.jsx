import basicMock from './basicMock'
import toolsMock from './toolsMock'
import antMock from './antMock'
import highOrderMock from './highOrderMock'
import componentMock from './componentMock'

import img from '@/images/icon/img.png'
import img1 from '@/images/icon/img1.png'
import img3 from '@/images/icon/img3.png'
import img4 from '@/images/icon/img3.png'
import img5 from '@/images/icon/img5.png'

const homeList = [
  {
    title: '基本操作（框架部分）',
    tip: '包含dva、路由、跳转等操作',
    content: '框架相关的属性',
    src: img,
    value: 'basic',
    children: basicMock
  },
  {
    title: '常用工具',
    tip: '包含弹框、加密、解密等操作',
    content: '框架相关的属性',
    src: img1,
    value: 'tools',
    children: toolsMock
  },
  {
    title: 'Ant Design 组件',
    tip: '包含按钮、列表懒加载等组件',
    content: '有关Ant Design 封装的小组件',
    src: img3,
    value: 'ant',
    children: antMock
  },
  {
    title: '展示组件',
    tip: '包含二维码、拖拽等组件',
    content: '各式各样的移动端小组件',
    src: img4,
    value: 'component',
    children: componentMock
  },
  // {
  //   title: '高阶组件',
  //   tip: '包含复杂、逻辑等操作',
  //   content: '框架相关的属性',
  //   src: img5,
  //   value: 'highOrder',
  //   children: highOrderMock
  // },
]
 
export default homeList;