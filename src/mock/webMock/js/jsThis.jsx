const Index = [
  {
    title: '',
    content: '闭包是函数和声明该函数的词法环境的组合',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: [
      '⾸先，在默认情况下，this是指向全局对象的，⽐如在浏览器就是指向window。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      name = "Bale";
      function sayName () {
        console.log(this.name);
      };
      sayName(); //"Bale"
    `,
    method: 'edit'
  },{
    title: '',
    content: [
      '其次，如果函数被调⽤的位置存在上下⽂对象时，那么函数是被隐式绑定的。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
    function f() {
      console.log( this.name );
    }
    var obj = { name: "Messi", f: f };
    obj.f(); //被调⽤的位置恰好被对象obj拥有，因此结果是Messi
    `,
    method: 'edit'
  },{
    title: '',
    content: [
      '再次，显示改变this指向，常⻅的⽅法就是call、apply、bind 以bind为例:'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      function f() {
        console.log( this.name );
      }
      var obj = { name: "Messi", };
      var obj1 = { name: "Bale" };
      f.bind(obj)(); //Messi ,由于bind将obj绑定到f函数上后返回⼀个新函数,因此需要再在后⾯加上括号进⾏执⾏,这是bind与apply和call的 区别
    `,
    method: 'edit'
  },{
    title: '',
    content: [
      '最后，也是优先级最⾼的绑定 new 绑定。',
      '⽤ new 调⽤⼀个构造函数，会创建⼀个新对象, 在创造这个新对象的过程中,新对象会⾃动绑定到Person对象的this上， 那么 this ⾃然就指向这个新对象。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '举例',
    content: `
      function Person(name) {
        this.name = name;
        console.log(name);
      }
      var person1 = new Person('Messi'); //Messi
    `,
    method: 'edit'
  },{
    content: `绑定优先级: new绑定 > 显式绑定 >隐式绑定 >默认绑定`,
    method: 'content',
    type: 'red'
  }
]

export default Index