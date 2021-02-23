const Index = [
  {
    title: '',
    content: '前端存储的方式有五种，分别是cookies、localstorage、sessionstorage、Web SQL、IndexedDB',
    method: 'content',
    type: 'blue'
  },{
    title: 'cookies',
    content: [
      '在HTML5标准前本地储存的主要⽅式，优点是兼容性好，请求头⾃带cookie⽅便',
      '缺点是⼤⼩只有4k， ⾃动请求头加⼊cookie浪费流量，每个domain限制20个cookie，使⽤起来麻烦需要⾃⾏封装'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'localstorage(本地存储)',
    content: [
      'HTML5加⼊的以键值对(Key-Value)为标准的⽅式，优点是操作⽅便，永久性储存（除⾮⼿动删 除），⼤⼩为5M，兼容IE8+',
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'sessionstorage(会话存储)',
    content: [
      '与localStorage基本类似，区别是sessionStorage当⻚⾯关闭后会被清理，⽽且与cookie、 localStorage不同，他不能在所有同源窗⼝中共享，是会话级别的储存⽅式'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'Web SQL',
    content: [
      '2010年被W3C废弃的本地数据库数据存储⽅案，但是主流浏览器（⽕狐除外）都已经有了相关的实现',
      'web sql类似于SQLite，是真正意义上的关系型数据库，⽤sql进⾏操作，当我们⽤JavaScript时要进⾏转换， 较为繁琐。',
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'IndexedDB',
    content: [
      ' 是被正式纳⼊HTML5标准的数据库储存⽅案，它是NoSQL数据库，⽤键值对进⾏储存，可以进⾏快 速读取操作，⾮常适合web场景，同时⽤JavaScript进⾏操作会⾮常⽅便。'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index