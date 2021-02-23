const Index = [
  {
    title: '',
    content: 'HTTP1.0定义了三种请求⽅法： GET, POST 和 HEAD⽅法',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: 'HTTP1.1新增了五种请求⽅法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT',
    method: 'content',
    type: 'blue'
  },{
    title: '具体作用',
    content: [
      {
        name: 'GET',
        value: '通常⽤于请求服务器发送某些资源'
      },{
        name: 'POST',
        value: '发送数据给服务器'
      },{
        name: 'HEAD',
        value: '请求资源的头部信息, 并且这些头部与 HTTP GET ⽅法请求时返回的⼀致. 该请求⽅法的⼀个使⽤场景是在 下载⼀个⼤⽂件前先获取其⼤⼩再决定是否要下载, 以此可以节约带宽资源'
      },{
        name: 'OPTIONS',
        value: '⽤于获取⽬的资源所⽀持的通信选项'
      },{
        name: 'PUT',
        value: '⽤于新增资源或者使⽤请求中的有效负载替换⽬标资源的表现形式'
      },{
        name: 'DELETE',
        value: '⽤于删除指定的资源'
      },{
        name: 'PATCH',
        value: '⽤于对资源进⾏部分修改'
      },{
        name: 'CONNECT',
        value: 'HTTP/1.1协议中预留给能够将连接改为管道⽅式的代理服务器'
      },{
        name: 'TRACE',
        value: ' 回显服务器收到的请求，主要⽤于测试或诊断'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default Index