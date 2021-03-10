const Index = [
  {
    title: '',
    content: '利用 <script> 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP请求一定需要对方的服务器做支持才可以。',
    method: 'content',
    type: 'blue'
  },{
    title: 'JSONP和AJAX对比',
    content: 'JSONP和AJAX相同，都是客户端向服务器端发送请求，从服务器端获取数据的方式。但AJAX属于同源策略，JSONP属于非同源策略（跨域请求）',
    method: 'content',
    type: 'blue'
  },{
    title: 'JSONP优缺点',
    content: [
      {
        name: '优点',
        value: '简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。'
      },{
        name: '缺点',
        value: '仅支持get方法具有局限性,不安全可能会遭受XSS攻击。'
      },
    ],
    method: 'content',
    type: 'list'
  },{
    title: 'JSONP的实现流程',
    content: [
      '声明一个回调函数，其函数名(如show)当做参数值，要传递给跨域请求数据的服务器，函数形参为要获取目标数据(服务器返回的data)。',
      '创建一个 <script>标签，把那个跨域的API数据接口地址，赋值给script的src,还要在这个地址中向服务器传递该函数名（可以通过问号传参:?callback=show）。',
      '服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串,例如：传递进去的函数名是show，它准备好的数据是 show(`我不爱你`)。',
      '最后服务器把准备的数据通过HTTP协议返回给客户端，客户端再调用执行之前声明的回调函数（show），对返回的数据进行操作。',
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
    title: '',
    content: '在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP函数',
    method: 'content',
  },{
    title: '',
    content: `
      function jspon({ url, params, callback}) {
        return new Promise((resolve, reject) => {
          let script = document.createElement('script')
          window[callback] = function (data) {
            resolve(data);
            document.body.removeChild(script)
          }
          params = {...params, callback }
          let arrs = []
          for(let key in params) {
            arrs.push(key + '=' + params[key])
          }
          script.src = url + '?' + arrs.join('&')
          document.body.appendChild(script)
        })
      }

      jsonp({
        url: 'http://localhost:3000/say',
        params: {
          wd: 'I love you'
        },
        callback: 'show'
      }).then(data => {
        console.log(data)
      })
    `,
    method: 'edit',
    copy: true
  },{
    title: '',
    content: `上面这段代码相当于向 http://localhost:3000/say?wd=Iloveyou&callback=show这个地址请求数据，然后后台返回 show('我不爱你')，最后会运行show()这个函数，打印出'我不爱你'`,
    method: 'content',
  },{
    title: '',
    content: `
      let express = require('express')
      let app = express()
      app.get('/say', function(req, res) => {
        let { wd, callback } = req.query
        console.log(wd)
        console.log(callback)
        res.end(callback + '("我不爱你")')
      })
      app.listen(3000)
    `,
    method: 'edit',
    copy: true
  }
]

export default Index