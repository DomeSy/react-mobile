const Index = [
  {
    title: '',
    content: '浏览器的组成部分主要有七部分，分别是：⽤户界⾯、浏览器引擎、呈现引擎、⽹络、⽤户界⾯后端、JavaScript 解释器、数据存储',
    method: 'content',
    type: 'blue'
  },
  {
    title: '组成部分',
    content: [
      {
        name: '⽤户界⾯',
        value: '包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗⼝显示的您请求的⻚⾯外，其他显示的各个 部分都属于⽤户界⾯。'
      },{
        name: '浏览器引擎',
        value: '在⽤户界⾯和呈现引擎之间传送指令。'
      },{
        name: '呈现引擎',
        value: '负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内 容显示在屏幕上。'
      },{
        name: '⽹络',
        value: '⽤于⽹络调⽤，⽐如 HTTP 请求。其接⼝与平台⽆关，并为所有平台提供底层实现。'
      },{
        name: '⽤户界⾯后端',
        value: '⽤于绘制基本的窗⼝⼩部件，⽐如组合框和窗⼝。其公开了与平台⽆关的通⽤接⼝，⽽在底层使⽤ 操作系统的⽤户界⾯⽅法。'
      },{
        name: 'JavaScript 解释器',
        value: '⽤于解析和执⾏ JavaScript 代码。'
      },{
        name: ' 数据存储',
        value: '这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“⽹ 络数据库”，这是⼀个完整（但是轻便）的浏览器内数据库。'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '',
    content: '注：和⼤多数浏览器不同，Chrome 浏览器的每个标签⻚都分别对应⼀个呈现引擎实例。每个标签⻚都是⼀个独⽴的进程。',
    method: 'content',
    type: 'red'
  },
]

export default Index