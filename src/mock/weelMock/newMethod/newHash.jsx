const Index = [
  {
    title: '',
    content: 'hash 模式和 history 模式都属于浏览器自身的特性',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'hash',
    content: [
      'hash即‘#/xxx’，是浏览器用来做页面定位的，例如a标签的描点功能，使用 window.location.hash 可以读取当前页面的hash值,也可以写入，hashchange事件可以响应hash的的改变',
      '改变hash值，浏览器不会重载页面，但会在历史访问里增加一条纪录',
      '刷新重载页面时，hash值不会传给服务器端',
      '如浏览器访问的URL是http://wenyan.51easymaster.com/#/WYHome， 实际上向服务器发起请求的URL是http://wenyan.51easymaster.com/'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'history',
    content: [
      'HTML5 History Interface 中history对象新增了两个方法 pushState() 和 popState()',
      '这两个方法应用于浏览器的历史记录栈，它们提供了对历史记录进行修改的功能。',
      '只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会重载页面。',
      '就是页面刷新后，页面就无法显示了（404）。对于这个问题，需要在服务器配置如果URL匹配不到任何静态资源，就跳转到默认的index.html。'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index