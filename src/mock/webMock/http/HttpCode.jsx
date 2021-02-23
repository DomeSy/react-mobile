const Index = [
  {
    title: '',
    content: 'HTTP的状态码有三位组成',
    method: 'content',
    type: 'blue'
  },{
    title: '2XX 成功',
    content: [
      {
        name: '200',
        value: 'OK，表示从客户端发来的请求在服务器端被正确处理'
      },{
        name: '201',
        value: 'Created 请求已经被实现，⽽且有⼀个新的资源已经依据请求的需要⽽建⽴'
      },{
        name: '201',
        value: 'Accepted 请求已接受，但是还没执⾏，不保证完成请求'
      },{
        name: '204',
        value: 'No content，表示请求成功，但响应报⽂不含实体的主体部分'
      },{
        name: '206',
        value: 'Partial Content，进⾏范围请求'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '3XX 重定向',
    content: [
      {
        name: '301',
        value: ' moved permanently，永久性重定向，表示资源已被分配了新的 URL'
      },{
        name: '302',
        value: 'found，临时性重定向，表示资源临时被分配了新的 URL ✨'
      },{
        name: '303',
        value: 'see other，表示资源存在着另⼀个 URL，应使⽤ GET ⽅法丁⾹获取资源'
      },{
        name: '304',
        value: 'not modified，表示服务器允许访问资源，但因发⽣请求未满⾜条件的情况'
      },{
        name: '307',
        value: 'temporary redirect，临时重定向，和302含义相同'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '4XX 客户端错误',
    content: [
      {
        name: '400',
        value: 'bad request，请求报⽂存在语法错误'
      },{
        name: '401',
        value: 'unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息'
      },{
        name: '403',
        value: 'forbidden，表示对请求资源的访问被服务器拒绝'
      },{
        name: '408',
        value: 'Request timeout, 客户端请求超时'
      },{
        name: '409',
        value: 'Confict, 请求的资源可能引起冲突'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '5XX 服务器错误',
    content: [
      {
        name: '500',
        value: 'internal sever error，表示服务器端在执⾏请求时发⽣了错误'
      },{
        name: '501',
        value: ' Not Implemented 请求超出服务器能⼒范围，例如服务器不⽀持当前请求所需要的某个功能，或者请求是服务 器不⽀持的某个⽅法'
      },{
        name: '503',
        value: 'service unavailable，表明服务器暂时处于超负载或正在停机维护，⽆法处理请求'
      },{
        name: '505',
        value: 'http version not supported 服务器不⽀持，或者拒绝⽀持在请求中使⽤的 HTTP 版本'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default Index