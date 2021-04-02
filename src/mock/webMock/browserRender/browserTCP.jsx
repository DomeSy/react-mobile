const Index = [
  {
    content: 'HTTP协议是使用TCP作为其传输层协议的，当TCP出现瓶颈时，HTTP也会受到影响。但由于TCP优化这一块我平常接触的并不是很多，再加上大学时的计算机网络的基础基本上忘完，所以这一部分我也就不在这里分析了。',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'HTTPS协议',
    content: [
      'HTTP报文是包裹在TCP报文中发送的，服务器端收到TCP报文时会解包提取出HTTP报文。',
      '但是这个过程中存在一定的风险，HTTP报文是明文，如果中间被截取的话会存在一些信息泄露的风险。',
      '那么在进入TCP报文之前对HTTP做一次加密就可以解决这个问题了。HTTPS协议的本质就是HTTP + SSL(or TLS)。在HTTP报文进入TCP报文之前，先使用SSL对HTTP报文进行加密。从网络的层级结构看它位于HTTP协议与TCP协议之间。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'HTTPS过程',
    content: [
      'HTTPS在传输数据之前需要客户端与服务器进行一个握手(TLS/SSL握手)，在握手过程中将确立双方加密传输数据的密码信息。TLS/SSL使用了非对称加密，对称加密以及hash等。',
      'HTTPS相比于HTTP，虽然提供了安全保证，但是势必会带来一些时间上的损耗，如握手和加密等过程，是否使用HTTPS需要根据具体情况在安全和性能方面做出权衡。'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index