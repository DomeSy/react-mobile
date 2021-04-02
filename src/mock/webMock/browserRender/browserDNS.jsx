const Index = [
  {
    title: '',
    content: '这道题相当于囊括了整个浏览器的原理，相当有技术含量',
    method: 'content',
    type: 'blue'
  },
  {
    title: '过程',
    content: [
      'DNS解析',
      'TCP连接',
      '发送HTTP请求',
      '服务器处理请求并返回HTTP报文',
      '浏览器解析渲染页面',
      '连接结束'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'DNS解析',
    content: [
      'DNS解析的过程就是寻找哪台机器上有你需要资源的过程。当你在浏览器中输入一个地址时，例如www.baidu.com，其实不是百度网站真正意义上的地址。',
      '互联网上每一台计算机的唯一标识是它的IP地址，但是IP地址并不方便记忆。用户更喜欢用方便记忆的网址去寻找互联网上的其它计算机，也就是上面提到的百度的网址。',
      '所以互联网设计者需要在用户的方便性与可用性方面做一个权衡，这个权衡就是一个网址到IP地址的转换，这个过程就是DNS解析。',
      '它实际上充当了一个翻译的角色，实现了网址到IP地址的转换。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'TCP连接',
    content: [
      'HTTP协议是使用TCP作为其传输层协议的，当TCP出现瓶颈时，HTTP也会受到影响'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'HTTP请求',
    content: [
      '其实这部分又可以称为前端工程师眼中的HTTP，它主要发生在客户端。发送HTTP请求的过程就是构建HTTP请求报文并通过TCP协议中发送到服务器指定端口(HTTP协议80/8080, HTTPS协议443)。',
      'HTTP请求报文是由三部分组成: 请求行, 请求报头和请求正文'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '服务器处理请求并返回HTTP报文',
    content: [
      '自然而然这部分对应的就是后端工程师眼中的HTTP。后端从在固定的端口接收到TCP报文开始，这一部分对应于编程语言中的socket,',
      '它会对TCP连接进行处理，对HTTP协议进行解析，并按照报文格式进一步封装成HTTP Request对象，供上层使用。',
      '这一部分工作一般是由Web服务器去进行，我使用过的Web服务器有Tomcat, Jetty和Netty等等。',
      'HTTP响应报文也是由三部分组成: 状态码, 响应报头和响应报文。',
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '浏览器解析渲染页面',
    content: [
      '浏览器在收到HTML,CSS,JS文件后，它是如何把页面呈现到屏幕上的',
      '首先浏览器解析HTML文件构建DOM树，然后解析CSS文件构建渲染树，等到渲染树构建完成后，浏览器开始布局渲染树并将其绘制到屏幕上。',
      'JS的解析是由浏览器中的JS解析引擎完成的。JS是单线程运行，也就是说，在同一个时间内只能做一件事，所有的任务都需要排队，前一个任务结束，后一个任务才能开始。但是又存在某些任务比较耗时，如IO读写等，所以需要一种机制可以先执行排在后面的任务',
      '浏览器在解析过程中，如果遇到请求外部资源时，如图像,iconfont,JS等。浏览器将重复1-6过程下载该资源。请求过程是异步的，并不会影响HTML文档进行加载，但是当文档加载过程中遇到JS文件，HTML文档会挂起渲染过程，不仅要等到文档中JS文件加载完毕还要等待解析执行完毕，才会继续HTML的渲染过程。',
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index