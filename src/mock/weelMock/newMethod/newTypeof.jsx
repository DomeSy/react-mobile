const Index = [
  {
    title: '',
    content: 'typeof与instanceof 都是判断数据类型的',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'typeof',
    content: '用于判断数据类型，返回值为6个字符串，分别为string、Boolean、number、function、object、undefined',
    method: 'content',
  },
  {
    title: '',
    content:  `
      const a = [34,4,3,54],
      b = 34,
      c = 'adsfas',
      d = function(){console.log('我是函数')},
      e = true,
      f = null,
      g;

      console.log(typeof(a));//object
      console.log(typeof(b));//number
      console.log(typeof(c));//string
      console.log(typeof(d));//function
      console.log(typeof(e));//boolean
      console.log(typeof(f));//object
      console.log(typeof(g));//undefined
    `,
    method: 'edit',
  },
  {
    title: '',
    content: 'typeof在判断null、array、object、函数时，得到的都是object。',
    method: 'content',
  },
  {
    title: 'instanceof',
    content: 'instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上',
    method: 'content',
  },
  {
    title: '',
    content:  `
      let obj = new Object()
      obj instanceof Object // true
    

      let num = 1
      num instanceof Number // false

      num = new Number(1)
      num instanceof Number // true

      明明都是num，而且都是1，只是因为第一个不是对象，是基本类型，所以直接返回false，而第二个是封装成对象，所以true。
      
      let arr = []
      arr instanceof Array // true
      arr instanceof Object // true
      Array.isArray(arr) // true
    `,
    method: 'edit',
  },

]

export default Index