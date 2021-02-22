import img from '@images/browser/cssChoose.png'

const Index = [
  {
    content: '浏览器会『从右往左』解析CSS选择器。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '例如',
    content: '我们知道DOM Tree与Style Rules合成为 Render Tree，实际上是需要将Style Rules附着到DOM Tree上，因此需要根 据选择器提供的信息对DOM Tree进⾏遍历，才能将样式附着到对应的DOM元素上。',
    method: 'content',
  },
  {
    title: '',
    content: `
      .mod-nav h3 span {font-size: 16px;}
    `,
    method: 'edit'
  },{
    title: '',
    content: `
      我们对应的DOM Tree 如下
    `,
    method: 'content',
  },{
    name: '解析css路程',
    height: '200px',
    content: img,
    method: 'imgs'
  },{
    title: '从左向右的匹配，过程是：',
    content: [
      '从 .mod-nav 开始，遍历⼦节点 header 和⼦节点 div',
      '然后各⾃向⼦节点遍历。在右侧 div 的分⽀中',
      '最后遍历到叶⼦节点 a ，发现不符合规则，需要回溯到 ul 节点，再遍历下⼀个 li-a，⼀颗DOM树的节点动不动上 千，这种效率很低。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '如果从右⾄左的匹配：',
    content: [
      '先找到所有的最右节点 span，对于每⼀个 span，向上寻找节点 h3',
      '由 h3再向上寻找 class=mod-nav 的节点',
      '最后找到根元素 html 则结束这个分⽀的遍历。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: '后者匹配性能更好，是因为从右向左的匹配在第⼀步就筛选掉了⼤量的不符合条件的最右节点（叶⼦节点）；⽽从左向 右的匹配规则的性能都浪费在了失败的查找上⾯。',
    method: 'content',
    type: 'red'
  }
]

export default Index