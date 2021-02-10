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
    src: Base,
    value: 'react',
    children: [
      {
        name: 'Hook',
        children: [
          {
            name: 'useState'
          },
          {
            name: 'useEffect'
          }
        ]
      }
    ]
  },
  {
    title: '组件展示',
    tip: '包含AntD、G2组件的封装及使用',
    value: 'component',
    src: Img1
  },
  {
    title: 'Web全栈',
    value: 'web',
    tip: '包含Vue，Node，Webpack等的语言',
    src: Img2
  },
  {
    title: 'JS方法',
    value: 'js',
    tip: '包含项目中常用的一些方法',
    src: Img3
  },
  {
    title: '算法',
    value: 'algorithm',
    tip: '包含快排、背包等常见算法',
    src: Img4
  },
  {
    title: '高阶组件',
    value: 'highOrder',
    tip: '包含复合组件、高级组件的使用',
    src: Img5,
    children: [
      {
        name: '手风琴列表',
        children: [
          {
            name: 'useState'
          },
          {
            name: 'useEffect'
          }
        ]
      }
    ]
  },
  {
    title: '轮子起源',
    value: 'wheel',
    tip: '天天造轮子，舍我其谁',
    src: Img6
  }
]
 
export default homeList;