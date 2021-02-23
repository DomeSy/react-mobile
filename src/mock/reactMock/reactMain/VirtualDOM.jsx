const VirtualDOM = [
  {
    title: '',
    content: 'Virtual DOM 是一个模拟 DOM 树的 JavaScript 对象',
    method: 'content',
    type: 'blue'
  },
  {
    title: '',
    content: 'React 使用 Virtual DOM 来渲染 UI，当组件状态 state 有更改的时候，React 会自动调用组件的 render 方法重新渲染整个组件的 UI',
    method: 'content',
    type: 'blue'
  },
  {
    title: '为什么使用Virtual DOM',
    content: [
      'DOM操作很慢，轻微的操作都可能导致页面重新排版，非常耗性能。相对于DOM对象，js对象处理更快，而且更简单。',
      '通过diff算法对比新旧vdom之间的差异，可以批量的、最小化的执行dom操作，从而提高性能'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '在那使用 Virtual DOM',
    content: [
      'react中使用JSX语法描述视图，通过 babel-loader 转译后它们变为 React.createElement(...) 形式，会使生成的vdom来描述真实的dom。',
      '将来如果状态变化，vdom将会作出相应变化，再通过diff算法对比新老vdom区域，作出最终的dom操作'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '如何实现',
    content: [
      'diff 算法'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '使用 Virtual DOM 的优势',
    content: [
      '将 Virtual DOM 作为一个兼容层，让我们还能对接非 Web 端的系统，实现跨端开发。',
      '同样的，通过 Virtual DOM 我们可以渲染到其他的平台，比如实现 SSR、同构渲染等等',
      '实现组件的高度抽象化'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default VirtualDOM