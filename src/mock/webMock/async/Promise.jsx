const Promise = [
  {
    title: '',
    content: 'Promise 简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。翻译过来是承诺的意思。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '',
    content: 'Promise是一个对象，从它可以获取异步操作的信息',
    method: 'content',
    type: 'blue'
  },
  {
    title: '特点',
    content: '对象的状态不受外界影响',
    method: 'content',
  },
  {
    title: '',
    content: [
      'Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）',
      '只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: '一旦状态改变，就不会再变，任何时候都可以得到这个结果',
    method: 'content',
  },
  {
    title: '',
    content: [
      'Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。',
      '只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: `
      new Promise((resolve, reject) => {
        resolve('success');
        // 无效
        reject('reject');
      }) 
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      '如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。',
      '这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '优点',
    content: [
      '有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。',
      'Promise对象提供统一的接口，使得控制异步操作更加容易。',
      '当我们在构造 Promise 的时候，构造函数内部的代码是立即执行的',
      'Promise 实现了链式调用，也就是说每次调用 then 之后返回的都是一个 Promise，并且是一个全新的 Promise，原因也是因为状态不可变。',
      '如果你在 then 中 使用了 return，那么 return 的值会被 Promise.resolve() 包装。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: `
      Promise.resolve(1)
      .then(res => {
        console.log(res) // => 1
        return 2 // 包装成 Promise.resolve(2)
      })
      .then(res => {
        console.log(res) // => 2
      })
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      'Promise 也很好地解决了回调地狱的问题，可以把之前的回调地狱例子改写为如下代码',
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: `
      ajax(url)
      .then(res => {
          console.log(res)
          return ajax(url1)
      }).then(res => {
          console.log(res)
          return ajax(url2)
      }).then(res => console.log(res))
    `,
    method: 'edit',
  },
  {
    title: '缺点',
    content: [
      '无法取消 Promise，错误需要通过回调函数捕获。一旦新建它就会立即执行，无法中途取消。',
      '如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。',
      '当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Promise