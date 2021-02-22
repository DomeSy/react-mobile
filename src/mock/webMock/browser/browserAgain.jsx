const Index = [
  {
    title: '重排',
    content: '部分渲染树（或者整个渲染树）需要重新分析并且节点尺⼨需要重新计算，表现为重新⽣成布局，重新排列元素',
    method: 'content',
    type: 'blue'
  },{
    title: '重绘',
    content: '由于节点的⼏何属性发⽣改变或者由于样式发⽣改变，例如改变元素背景⾊时，屏幕上的部分内容需要更新，表现为某些元素的外观被改变',
    method: 'content',
    type: 'blue'
  },
  {
    title: '',
    content: [
      '单单改变元素的外观，肯定不会引起⽹⻚重新⽣成布局，但当浏览器完成重排之后，将会重新绘制受到此次重排影响的部分',
      '重排和重绘代价是⾼昂的，它们会破坏⽤户体验，并且让UI展示⾮常迟缓，⽽相⽐之下重排的性能影响更⼤，在两者⽆ 法避免的情况下，⼀般我们宁可选择代价更⼩的重绘。',
      '『重绘』不⼀定会出现『重排』，『重排』必然会出现『重绘』。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '如何触发重排和重绘',
    content: '任何改变⽤来构建渲染树的信息都会导致⼀次重排或重绘：',
    method: 'content',
  },{
    title: '如何触发重排和重绘',
    content: [
      '添加、删除、更新DOM节点',
      '通过display: none隐藏⼀个DOM节点-触发重排和重绘',
      '通过visibility: hidden隐藏⼀个DOM节点-只触发重绘，因为没有⼏何变化',
      '移动或者给⻚⾯中的DOM节点添加动画',
      '添加⼀个样式表，调整样式属性',
      '⽤户⾏为，例如调整窗⼝⼤⼩，改变字号，或者滚动。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '如何避免重绘或者重排',
    content: [
      '集中改变样式',
      '使⽤DocumentFragment',
      '提升为合成层'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '集中改变样式',
    content: '我们往往通过改变class的⽅式来集中改变样式',
    method: 'content'
  },{
    title: '',
    content: `
      // 判断是否是⿊⾊系样式
      const theme = isDark ? 'dark' : 'light'
      // 根据判断来设置不同的class
      ele.setAttribute('className', theme)
    `,
    method: 'edit',
  },{
    title: '使⽤DocumentFragment',
    content: '我们可以通过createDocumentFragment创建⼀个游离于DOM树之外的节点，然后在此节点上批量操作，最后插⼊ DOM树中，因此只触发⼀次重排',
    method: 'content'
  },{
    title: '',
    content: `
      var fragment = document.createDocumentFragment();
      for (let i = 0;i<10;i++){
        let node = document.createElement("p");
        node.innerHTML = i;
        fragment.appendChild(node);
      }
      document.body.appendChild(fragment);
    `,
    method: 'edit',
  },{
    title: '提升为合成层',
    content: '将元素提升为合成层有以下优点：',
    method: 'content'
  },{
    title: '',
    content: [
      '合成层的位图，会交由 GPU 合成，⽐ CPU 处理要快',
      '当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层',
      '对于 transform 和 opacity 效果，不会触发 layout 和 paint'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: '提升合成层的最好⽅式是使⽤ CSS 的 will-change 属性：',
    method: 'content'
  },{
    title: '',
    content: `
      #target {
        will-change: transform;
      }
    `,
    method: 'edit',
  }
]

export default Index