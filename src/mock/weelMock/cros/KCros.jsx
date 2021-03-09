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
  },{
    title: '常见跨域场景',
    content: '当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”。',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: [
      '同一域名下   => 允许',
      '同一域名下，不同文件   => 允许',
      '同一域名下，不同端口  => 不允许',
      '同一域名下，不同协议  => 不允许',
      '域名和域名对应ip  => 不允许',
      '主域相同，子域不同  => 不允许',
      '同一域名，不同二级域名  => 不允许',
      '不同域名  => 不允许',
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '特别说明',
    content: [
      '如果是协议和端口造成的跨域问题“前端”是无能为力的。',
      '在跨域问题上，仅仅是通过“URL的首部”来识别而不会根据域名对应的IP地址是否相同来判断。“URL的首部”可以理解为“协议, 域名和端口必须匹配”。',
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '请求跨域了，那么请求到底发出去没有？',
    content: [
      '跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了。',
      '你可能会疑问明明通过表单的方式可以发起跨域请求，为什么 Ajax 就不会?',
      '因为归根结底，跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。',
      '但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。',
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index