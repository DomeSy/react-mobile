const Generator = [
  {
    title: '',
    content: 'async 和 await是ES7提供的语法，可以说是异步终极解决方案',
    method: 'content',
    type: 'blue'
  },
  {
    title: '特点',
    content: '一个函数如果加上 async ，那么该函数就会返回一个 Promise',
    method: 'content'
  },
  {
    title: '',
    content: `
      async function test() {
        return "1"
      }
      console.log(test()) // -> Promise {<resolved>: "1"
    `,
    method: 'edit',
  },
  {
    title: '',
    content: 'async 就是将函数返回值使用 Promise.resolve() 包裹了下，和 then 中处理返回值一样，并且 await 只能配套 async 使用',
    method: 'content'
  },
  {
    title: '',
    content: `
      async function test() {
        let value = await sleep()
      }
    `,
    method: 'edit',
  },
  {
    title: '相比直接使用 Promise 来说',
    content: [
      '优势在于处理 then 的调用链，能够更清晰准确的写出代码，毕竟写一大堆 then 也很恶心，并且也能优雅地解决回调地狱问题。',
      '当然也存在一些缺点，因为 await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '代码示例',
    content: `
      async function test() {
        // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
        // 如果有依赖性的话，其实就是解决回调地狱的例子了
        await fetch(url)
        await fetch(url1)
        await fetch(url2)
      }

      //下面来看一个使用 await 的例子：
      let a = 0
      let b = async () => {
        a = a + await 10
        console.log('2', a) // -> '2' 10
      }
      b()
      a++
      console.log('1', a) // -> '1' 1;
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      '首先函数 b 先执行，在执行到 await 10 之前变量 a 还是 0，因为 await 内部实现了 generator ，generator 会保留堆栈中东西，所以这时候 a = 0 被保存了下来',
      '因为 await 是异步操作，后来的表达式不返回 Promise 的话，就会包装成 Promise.reslove(返回值)，然后会去执行函数外的同步代码',
      '同步代码执行完毕后开始执行异步代码，将保存下来的值拿出来使用，这时候 a = 0 + 10'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    content: '上述解释中提到了 await 内部实现了 generator，其实 await 就是 generator 加上 Promise 的语法糖，且内部实现了自动执行 generator。',
    method: 'content',
    type: 'red'
  }
]

export default Generator