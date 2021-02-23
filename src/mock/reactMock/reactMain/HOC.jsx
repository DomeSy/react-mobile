const HOC = [
  {
    title: '',
    content: '高阶组件即HOC，（参数是组件，返回的值也是组件）',
    method: 'content',
    type: 'blue'
  },
  {
    title: '定义',
    content: [
      '⾼阶组件（HOC:Higher-Order Components）是 React 中⽤于复⽤组件逻辑的⼀种⾼级技巧。',
      'HOC ⾃身不是 React API 的⼀部分，它是⼀种基于React 的组合特性⽽形成的设计模式。',
      'React中重用组件逻辑的高级技术，它不是react的api，而是一种 组件增强模式。  高阶组件是一个函数，它返回另外一个组件，产生新的组件可以对被包装组件属性进行包装，也可 以重写部分生命周期',
      '⾼阶组件是是⼀个⼯⼚函数，参数为组件，返回值为新组件的函数为了提⾼组件复⽤率，可测试性，就要保证组件功能单⼀性；但是若要满⾜复杂需求就要扩展功能单⼀的组件，在React⾥就有了HOC的概念'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '使用',
    content: '当对一个组件进行扩充的时候，应当首先考虑高阶组件',
    method: 'content',
  },{
    title: '作用',
    content: '提高组件复用率',
    method: 'content',
  },{
    title: '使用HOC的注意事项',
    content: [
      '高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。不要在 render 方法中使用 HOC',
      'React 的 diff 算法（称为协调）使用组件标识来确定它是应该更新现有子树还是将其丢弃并挂载新子树。',
      '如果从 render 返回的组件与前一个渲染中的组件相同（ === ），则 React 通过将子树与',
      '新子树进行区分来递归更新子树。 如果它们不相等，则完全卸载前一个子树。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content:  `
      render() {
        // 每次调用 render 函数都会创建一个新的 EnhancedComponent
        // EnhancedComponent1 !== EnhancedComponent2
        const EnhancedComponent = enhance(MyComponent);
        // 这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
        return <EnhancedComponent />;
      }
    `,
    method: 'edit',
  }
]

export default HOC