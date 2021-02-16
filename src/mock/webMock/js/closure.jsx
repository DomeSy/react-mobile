const Index = [
  {
    title: '',
    content: '闭包是函数和声明该函数的词法环境的组合',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: '按照我的理解就是：闭包 =『函数』和『函数体内可访问的变量总和』',
    method: 'content',
    type: 'blue'
  },{
    title: '举例',
    content: `
      (function() {
        var a = 1;
        function add() {
          var b = 2
          var sum = b + a
          console.log(sum); // 3
        }add()
      })()
    `,
    method: 'edit'
  },{
    title: '',
    content: [
      'add 函数本身，以及其内部可访问的变量，即 a = 1 ，这两个组合在⼀起就被称为闭包'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '闭包的作⽤',
    content: [
      '闭包最⼤的作⽤就是隐藏变量，闭包的⼀⼤特性就是内部函数总是可以访问其所在的外部函数中声明的参数和变量，即 使在其外部函数被返回（寿命终结）了之后',
      '基于此特性，JavaScript可以实现私有变量、特权变量、储存变量等',
      '我们就以私有变量举例，私有变量的实现⽅法很多，有靠约定的（变量名前加_）,有靠Proxy代理的，也有靠Symbol这 种新数据类型的。',
      '但是真正⼴泛流⾏的其实是使⽤闭包。如：'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '举例',
    content: `
      function Person(){
        var name = 'cxk';
        this.getName = function(){
          return name;
        }
        this.setName = function(value){
          name = value;
        }
      }
      const cxk = new Person()
      console.log(cxk.getName()) //cxk
      cxk.setName('jntm')
      console.log(cxk.getName()) //jntm
      console.log(name) //name is not defined
    `,
    method: 'edit'
  },{
    content: `函数体内的 var name = 'cxk' 只有 getName 和 setName 两个函数可以访问，外部⽆法访问，相对于将变量私有化。`,
    method: 'content',
    type: 'red'
  }
]

export default Index