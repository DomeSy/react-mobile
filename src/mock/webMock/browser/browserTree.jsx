const Index = [
  {
    title: '',
    content: 'DOM树的构建主要有四个步骤：转码、⽣成Tokens、构建Nodes、⽣成DOM Tree',
    method: 'content',
    type: 'blue'
  },
  {
    title: '步骤',
    content: [
      {
        name: '转码',
        value: '浏览器将接收到的⼆进制数据按照指定编码格式转化为HTML字符串'
      },{
        name: '⽣成Tokens',
        value: '之后开始parser，浏览器会将HTML字符串解析成Tokens'
      },{
        name: '构建Nodes',
        value: '对Node添加特定的属性，通过指针确定 Node 的⽗、⼦、兄弟关系和所属 treeScope'
      },{
        name: ' ⽣成DOM Tree',
        value: '通过node包含的指针确定的关系构建出DOM Tree'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default Index