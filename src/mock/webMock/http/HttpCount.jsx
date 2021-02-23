const Index = [
  {
    title: '请求报⽂',
    content: "请求报⽂有4部分组成:请求⾏,请求头部,空⾏,请求体",
    method: 'content',
    type: 'blue'
  },
  {
    title: '',
    content: [
      {
        name: '请求⾏',
        value: '请求⽅法字段、URL字段、HTTP协议版本字段。它们⽤空格分隔。例如，GET /index.html HTTP/1.1。'
      },{
        name: '请求头部',
        value: '请求头部由关键字/值对组成，每⾏⼀对，关键字和值⽤英⽂冒号“:”分隔'
      },{
        name: 'User-Agent',
        value: '产⽣请求的浏览器类型。'
      },{
        name: 'Accept',
        value: '客户端可识别的内容类型列表。'
      },{
        name: 'Host',
        value: '请求的主机名，允许多个域名同处⼀个IP地址，即虚拟主机'
      },{
        name: '请求体',
        value: 'post put等请求携带的数据'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '请求报⽂',
    content: "请求报⽂有4部分组成:响应⾏,响应头,空⾏,响应体",
    method: 'content',
    type: 'blue'
  },
  {
    title: '响应报文',
    content: [
      {
        name: '响应⾏',
        value: ' 由协议版本，状态码和状态码的原因短语组成，例如 HTTP/1.1 200 OK 。'
      },{
        name: '响应头',
        value: '响应部⾸组成'
      },{
        name: '响应体',
        value: '服务器响应的数据'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default Index