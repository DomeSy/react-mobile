import img from '@images/browser/webkit.png'

const Index = [
  {
    title: '',
    content: [
      '浏览器获取HTML⽂件，然后对⽂件进⾏解析，形成DOM Tree',
      '与此同时，进⾏CSS解析，⽣成Style Rules',
      '接着将DOM Tree与Style Rules合成为 Render Tree',
      '接着进⼊布局（Layout）阶段，也就是为每个节点分配⼀个应出现在屏幕上的确切坐标',
      '随后调⽤GPU进⾏绘制（Paint），遍历Render Tree的节点，并将元素呈现出来'
    ],
    method: 'content',
    type: 'listAll'
  },{
    name: 'webkit主流程',
    height: '200px',
    content: img,
    method: 'imgs'
  },
]

export default Index