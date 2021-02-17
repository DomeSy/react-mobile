const Index = [
  {
    title: '',
    content: '事件冒泡(event bubbling)，即事件开始时由最具体的元素(⽂档中嵌套层次最深的那个节点)接收，然后逐级向上传播到 较为不具体的节点。',
    method: 'content',
    type: 'blue'
  },{
    title: '举例',
    content: `
      <!DOCTYPE HTML>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Document</title>
          </head>
        <body>
          <div>
          </div>
        </body>
      </html>
    `,
    method: 'edit'
  },{
    title: '',
    content: '如果单击了⻚⾯中的 <div> 元素，那么这个click事件沿DOM树向上传播，在每⼀级节点上都会发⽣，按照如下顺序传 播：',
    method: 'content',
  },{
    title: '',
    content: [
      'div',
      'body',
      'html',
      'document'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index