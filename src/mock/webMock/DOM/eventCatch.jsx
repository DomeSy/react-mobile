const Index = [
  {
    title: '',
    content: '事件捕获的思想是不太具体的节点应该更早接收到事件，⽽最具体的节点应该最后接收到事件。事件捕获的⽤意在于在 事件到达预定⽬标之前就捕获它。',
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
    content: '在事件捕获过程中，document对象⾸先接收到click事件，然后事件沿DOM树依次向下，⼀直传播到事件的实际⽬标， 即 <div> 元素',
    method: 'content',
  },{
    title: '',
    content: [
      'document',
      'html',
      'body',
      'div'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index