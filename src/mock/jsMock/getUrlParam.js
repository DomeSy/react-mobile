const ArrayTree = [
  {
    title: '',
    content: '获取地址栏参数最常见的一种，使用正则获取，是最好的方式',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: '正常地址获取参数，哈希地址获取参数，两地址获取参数',
    method: 'content',
  },
  {
    title: '正常地址获取参数',
    content: `const url = 'http://www.domesy.cn/?name=React';`,
    method: 'edit',
  },{
    title: '',
    content: '结果',
    method: 'content',
  },{
    title: '',
    content: `
      const res = Method.getUrlParam('name', url)
      console.log(res,'00')'; //React
    `,
    method: 'edit',
  },{
    title: '哈希地址获取参数',
    content: `哈希地址中有#/，进行匹配过滤`,
    method: 'content',
    type: 'blue'
  },
  {
    title: '',
    content: `const url = 'http://www.domesy.cn/#/?name=React';`,
    method: 'edit',
  },{
    title: '',
    content: '结果',
    method: 'content',
  },{
    title: '',
    content: `
      const res = Method.getUrlParam('name', url)
      console.log(res,'00')'; //React
    `,
    method: 'edit',
  },
  {
    title: '两地址获取参数',
    content: `在工作中，有时会遇到这种场景，地址有个参数url，url接受的是个地址，之后还有其他参数要获取，这时普通的地址栏获取参数就不行了，所以要通过正则去获取`,
    method: 'content',
    type:'blue'
  },
  {
    title: '',
    content: `const url = 'http://www.domesy.cn/#/?url=https://www.baidu.com/?name=React';`,
    method: 'edit',
  },{
    title: '',
    content: '结果',
    method: 'content',
  },{
    title: '',
    content: `
      const res = Method.getUrlParam('name', url)
      console.log(res,'00')'; //React
    `,
    method: 'edit',
  },
  {
    title: '代码',
    content: `
      static getUrlParam = (id, path) => {
        let url = "";
        if (path) {
          url = path
        } else {
          if(location.href.indexOf('#/') !== -1){
            url = location.href.replace('#/', '')
          } else{
            url = location.href
          }
        }
        url = url + "";
        let regstr = "/(\\?|\\&)" + id + "=([^\\&]+)/";
        let reg = eval(regstr); //eval可以将 regstr字符串转换为 正则表达式
        let result = url.match(reg); //匹配的结果是：result[0]=?sid=22 result[1]=sid result[2]=22。所以下面我们返回result[2]
        if (result && result[2]) {
          return result[2];
        }
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: 'id',
        value: '获取的参数'
      },{
        name: 'path',
        value: '地址'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default ArrayTree