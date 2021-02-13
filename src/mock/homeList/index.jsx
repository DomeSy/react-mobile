import reactMock from './reactMock'
import componentMock from './componentMock'
import webMock from './webMock'
import jsMock from './jsMock'
import algorithmMock from './algorithmMock'
import highOrderMock from './highOrderMock'
import weelMock from './weelMock'

import Base from '@images/icon/base.png'
import Img1 from '@images/icon/img1.png'
import Img2 from '@images/icon/img2.png'
import Img3 from '@images/icon/img3.png'
import Img4 from '@images/icon/img4.png'
import Img5 from '@images/icon/img5.png'
import Img6 from '@images/icon/img6.png'


const homeList = [
  {
    title: 'React',
    tip: '包含react、react-redux、mobx等',
    content: '这里有着React相关的文章',
    src: Base,
    value: 'react',
    children: reactMock
  },
  {
    title: '组件展示',
    tip: '包含AntD、G2组件的封装及使用',
    content: '基于组件库的二次封装，是开发更加简洁',
    value: 'component',
    src: Img1,
    children: componentMock
  },
  {
    title: 'Web全栈',
    value: 'web',
    content: '前端语言的学习笔记',
    tip: '包含Vue，Node，Webpack等的语言',
    src: Img2,
    children: webMock
  },
  {
    title: 'JS方法',
    value: 'js',
    content: '封装常见的JS方法，使其高效开发',
    tip: '包含项目中常用的一些方法',
    src: Img3,
    children: jsMock
  },
  {
    title: '算法',
    value: 'algorithm',
    content: '算法是锻炼思维的利器',
    tip: '包含快排、背包等常见算法',
    src: Img4,
    children: algorithmMock
  },
  {
    title: '高阶组件',
    value: 'highOrder',
    content: '封装较为复杂的组件，使其在业务上更好的开发',
    tip: '包含复合组件、高级组件的使用',
    src: Img5,
    children: highOrderMock
  },
  {
    title: '轮子起源',
    value: 'wheel',
    content: '天天造轮子，舍我其谁',
    tip: '包含加密解密、防抖等轮子',
    src: Img6,
    children: weelMock
  }
]
 
export default homeList;