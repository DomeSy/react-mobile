const Index = [
  {
    title: '什么是同源策略及其限制内容?',
    content: '同源策略是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: '所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。',
    method: 'content',
    type: 'blue'
  },{
    title: '同源策略限制内容有',
    content: [
      'Cookie、LocalStorage、IndexedDB 等存储性内容',
      'DOM 节点',
      'AJAX 请求发送后，结果被浏览器拦截了'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: '但是有三个标签是允许跨域加载资源：',
    method: 'content',
  },{
    title: '',
    content: [
      '<imgsrc=XXX>',
      '<linkhref=XXX>',
      '<scriptsrc=XXX>'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index