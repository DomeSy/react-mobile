const Generator = [
  {
    title: '',
    content: '生成器函数，在function* (function后面加一个*) 这种声明方式会定义成一个生成器函数(generator function)，它返回一个 Generator 对象',
    method: 'content',
    type: 'blue'
  },
  {
    title: '定义生成器函数',
    content: `
      function* g() {
        yield 'a',
        yield 'b',
        yield 'c';
        return 'ending';
      }
      console.log(g());
      console.log(g().toString()); 
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '执行结果',
    content: `
      g {<suspended>} //(挂载状态，里面的根本没有执行)
      [ object Generator ] (没有实际的意义)
    `,
    method: 'edit',
  },
  {
    title: '继续执行',
    content: `
      const gen = g();
      console.log(gen.next());   // {value: "a", done: false}
      console.log(gen.next());   // {value: "b", done: false}
      console.log(gen.next());   // {value: "c", done: false}
      console.log(gen.next());   // {value: "ending", done: true}
    `,
    method: 'edit',
    copy: true
  },
  {
    content: [
      {
        name: 'gen.next()',
        value: '依次执行'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    content: [
      'value的值是 yield 关键字后面的表达式的值（return 也是）',
      'done 为 false 代表未执行完，为true代表执行完成',
      '不再是同步的代码，而是异步的，线性当时，解决异步问题'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '利用递归执行生成器的所有步骤',
    content: `
      function* g() {
        yield 'a',
        yield 'b',
        yield 'c';
        return 'ending';
      }
      const gen = g();
      function next() {
        let {value, done} = gen.next();
        console.log(value);  // 依次打印 a b c ending
        if(!done)
        next();    // 直到全部打印完成
      }
      next();
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '利用for   of   执行生成器的所有步骤',
    content: `
      for(let value of gen){
        console.log(value); //依次打印 a b c
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    content: '不能打印return的数',
    method: 'content',
    type: 'red'
  },
  {
    title: '参数的传递',
    content: `
      function* say() {
        let a = yield '1';
        console.log(a)
        let b = yield '2';
        console.log(b)
      }
      
      let it = say(); // 返回迭代器
      
      // a的值并非该返回值，而是下次next参数
      console.log(it.next()); // 输出 { value: '1', done: false }
      
      // '我是被传进来的1'
      // { value: '2', done: false } (自身的返回值)
      console.log(it.next('我是被传进来的1')); 
                                              
      // '我是被传进来的2'                               
      // { value: undefined, done: false } (自身的返回值)
      console.log(it.next('我是被传进来的2'));  
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      '每次执行next，只执行 yield 后面的部分',
      '第一次的next()传参是无效果的，第二次传进来的其实是等于yield 1 的前半部分，实际上复制给了a'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Generator