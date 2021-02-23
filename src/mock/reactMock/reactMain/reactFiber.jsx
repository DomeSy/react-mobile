const reactFiber = [
  {
    title: '',
    content: [
      'React Fiber 是⼀种基于浏览器的单线程调度算法.',
      'React 16之前 ， reconcilation 算法实际上是递归，想要中断递归是很困难的，React 16 开始使⽤了循环来代替之前 的递归.',
      'Fiber ：⼀种将 recocilation （递归 diff），拆分成⽆数个⼩任务的算法；它随时能够停⽌，恢复。停⽌恢复的时机 取决于当前的⼀帧（16ms）内，还有没有⾜够的时间允许计算。'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default reactFiber