const Index = [
  {
    title: '',
    content: [
      {
        name: '数据传输⽅式不同',
        value: 'GET请求通过URL传输数据，⽽POST的数据通过请求体传输。'
      },{
        name: '安全性不同',
        value: 'POST的数据因为在请求主体内，所以有⼀定的安全性保证，⽽GET的数据在URL中，通过历史记录，缓存很容易查到数据信息。'
      },{
        name: '数据类型不同',
        value: 'GET只允许 ASCII 字符，⽽POST⽆限制'
      },{
        name: 'GET⽆害',
        value: '刷新、后退等浏览器操作GET请求是⽆害的，POST可能重复提交表单'
      },{
        name: '特性不同',
        value: 'GET是安全（这⾥的安全是指只读特性，就是使⽤这个⽅法不会引起服务器状态变化）且幂等（幂等的 概念是指同⼀个请求⽅法执⾏多次和仅执⾏⼀次的效果完全相同），⽽POST是⾮安全⾮幂等'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default Index