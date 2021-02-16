const Timer = [
  {
    title: '',
    content: '异步编程中最基本的就是定时器，常见的定时器有setTimeout、setInterval、requestAnimationFrame、setImmediate',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'setTimeout',
    content: 'setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。',
    method: 'content',
  },
  {
    content: [
      '很多人认为 setTimeout 是延时多久，那就应该是多久后执行。其实这个观点是错误的，因为 JS 是单线程执行的，如果前面的代码影响了性能，就会导致 setTimeout 不会按期执行',
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '示例',
    content: `
      setTimeout(() => {
        //代码块
      }, 3000);  
    `,
    method: 'edit',
  },
  {
    title: 'setInterval',
    content: 'setInterval()与setTimeout()方法一样，只是会不断的执行',
    method: 'content',
  },
  {
    content: [
      '通常来说不建议使用 setInterval',
      '第一，它和 setTimeout 一样，不能保证在预期的时间执行任务。',
      '第二，它存在执行累积的问题',
      '如果定时器执行过程中出现了耗时操作，多个回调函数会在耗时操作结束以后同时执行，这样可能就会带来性能上的问题'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '示例',
    content: `
      function demo() {
        setInterval(function(){
          console.log(2)
        },1000)
        sleep(2000)
      }
      demo() 
    `,
    method: 'edit',
  },
  {
    title: 'requestAnimationFram',
    content: '如果有循环定时器的需求，其实完全可以通过 requestAnimationFrame 来实现。',
    method: 'content',
  },
  {
    content: [
      'requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机',
      '首先 requestAnimationFrame 自带函数节流功能，基本可以保证在 16.6 毫秒内只执行一次（不掉帧的情况下），并且该函数的延时效果是精确的，没有其他定时器时间不准的问题，当然你也可以通过该函数来实现 setTimeout。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '示例',
    content: `
      function setInterval(callback, interval) {
        let timer
        const now = Date.now
        let startTime = now()
        let endTime = startTime
        const loop = () => {
          timer = window.requestAnimationFrame(loop)
          endTime = now()
          if (endTime - startTime >= interval) {
            startTime = endTime = now()
            callback(timer)
          }
        }
        timer = window.requestAnimationFrame(loop)
        return timer
      }
      
      let a = 0
      setInterval(timer => {
        console.log(1)
        a++
        if (a === 3) cancelAnimationFrame(timer)
      }, 1000) 
    `,
    method: 'edit',
  },
  {
    title: 'setImmediate',
    content: '该方法用来把一些需要长时间运行的操作放在一个回调函数里,在浏览器完成后面的其他语句后,就立刻执行这个回调函数。',
    method: 'content',
  },
  {
    content: [
      '这个不怎么常用，再次就不介绍了',
    ],
    method: 'content',
    type: 'listAll'
  },
]

export default Timer