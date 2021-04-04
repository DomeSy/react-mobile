const PromiseUse = [
  {
    title: '',
    content: 'Promise的面试题',
    method: 'content',
    type: 'blue'
  },
  {
    title: '案例一',
    content: `
      const promise = new Promise((resolve, reject) => {
        console.log(1)
        resolve()
        console.log(2)
      })
      promise.then(() => {
        console.log(3)
      })
      console.log(4)
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      {
        name: '运行结果',
        value: '1,2,3,4'
      },
      {
        name: '解释',
        value: 'Promise 构造函数是同步执行的，promise.then 中的函数是异步执行的。'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '案例二',
    content: `
      const promise = new Promise((resolve, reject) => {
        resolve('success1')
        reject('error')
        resolve('success2')
      })
      
      promise
      .then((res) => {
        console.log('then: ', res)
      })
      .catch((err) => {
        console.log('catch: ', err)
      }
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      {
        name: '运行结果',
        value: 'then: success1'
      },
      {
        name: '解释',
        value: '构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用，呼应代码二结论：promise 状态一旦改变则不能再变。'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '案例三',
    content: `
      Promise.resolve(1)
      .then(2)
      .then(Promise.resolve(3))
      .then(console.log)
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      {
        name: '运行结果',
        value: '1'
      },
      {
        name: '解释',
        value: '.then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '案例四',
    content: `
      process.nextTick(() => {
        console.log('nextTick')
      })
      Promise.resolve()
        .then(() => {
          console.log('then')
        })
      setImmediate(() => {
        console.log('setImmediate')
      })
      console.log('end')
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      {
        name: '运行结果',
        value: 'end，nextTick，then，setImmediate'
      },
      {
        name: '解释',
        value: 'process.nextTick 和 promise.then 都属于 microtask，而 setImmediate 属于 macrotask，在事件循环的 check 阶段执行。'
      }
    ],
    method: 'content',
    type: 'list'
  }, 
  {
    title: '案例五',
    content: `
      Promise.resolve(1)
      .then((res) => {
        console.log(res)
        return 2
      })
      .catch((err) => {
        return 3
      })
      .then((res) => {
        console.log(res)
      })
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      {
        name: '运行结果',
        value: '1，2'
      },
      {
        name: '解释1',
        value: 'promise 可以链式调用。提起链式调用我们通常会想到通过 return this 实现，不过 Promise 并不是这样实现的。'
      },
      {
        name: '解释2',
        value: 'promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用。'
      }
    ],
    method: 'content',
    type: 'list'
  },
]

export default PromiseUse