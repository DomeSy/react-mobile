const ReactRequest = [
  {
    title: '',
    content: [
      'React的异步请求到底应该放在哪个⽣命周期⾥,有⼈认为在 componentWillMount 中可以提前进⾏异步请求,避免⽩屏,其 实这个观点是有问题的.',
      '由于JavaScript中异步事件的性质，当您启动API调⽤时，浏览器会在此期间返回执⾏其他⼯作。当React渲染⼀个组件 时，它不会等待componentWillMount它完成任何事情 - React继续前进并继续render,没有办法“暂停”渲染以等待数据到达。',
      '⽽且在 componentWillMount 请求会有⼀系列潜在的问题,⾸先,在服务器渲染时,如果在 componentWillMount ⾥获取数 据，fetch data会执⾏两次，⼀次在服务端⼀次在客户端，这造成了多余的请求,其次,在React 16进⾏React Fiber重写 后, componentWillMount 可能在⼀次渲染中多次调⽤.',
      '⽬前官⽅推荐的异步请求是在 componentDidmount 中进⾏.',
      'react 17之后 componentWillMount 会被废弃,仅仅保留 UNSAFE_componentWillMount'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default ReactRequest