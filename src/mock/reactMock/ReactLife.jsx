const ReactLife = [
  {
    title: '',
    content: 'React 16之后有三个⽣命周期被废弃(但并未删除),分别是componentWillMount,componentWillReceiveProps,componentWillUpdate,官⽅计划在17版本完全删除这三个函数，只保留UNSAVE_前缀的三个函数，⽬的是为了向下兼容，但是对于开发者⽽ ⾔应该尽量避免使⽤他们，⽽是使⽤新增的⽣命周期函数替代它们',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'React生命周期两个版本',
    content: '一个是React v16.0以前的 和 React v16.4两个版本',
    method: 'content',
    type: 'blue'
  },
  {
    title: '变更理由',
    content: 'React v16.0前的生命周期在React v16推出的Fiber之后就不合适了，因为如果要开启async rendering，在render函数之前的所有函数，都有可能被执行多次。',
    method: 'content',
  },
  {
    title: '与旧的生命周期相比',
    content: [
      '新增了getDerivedStateFromProps和getSnapshotBeforeUpdate',
      '取消了componentWillMount、componentWillReceiveProps、componentWillUpdate，即取消了除卸载阶段的compentWillUnmount所有带Will的钩子函数',
      'getDerivedStateFromProps(prevProps, prevState)：组件创建和更新时调用的方法。',
      'getSnapshotBeforeUpdate(prevProps, prevState): Updating时的函数，在render之后调用。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'getDerivedStateFromProps(prevProps, prevState)',
    content: [
      'prevProps: 组件更新前的props',
      'prevState: 组件更新前的state',
      '在React v16.3中，在创建和更新时，只能是由父组件引发才会调用这个函数，在React v16.4改为无论是Mounting还是Updating，也无论是什么引起的Updating，全部都会调用。',
      '类似于componentWillReceiveProps，不同的是getDerivedStateFromProps是一个静态函数，也就是这个函数不能通过this访问到class的属性，当然也不推荐使用',
      '如果props传入的内容不需要影响到你的state，那么就需要返回一个null，这个返回值是必须的，所以尽量将其写到函数的末尾。',
      '在组件创建时和更新时的render方法之前调用，它应该返回一个对象来更新状态，或者返回null来不更新任何内容。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'getSnapshotBeforeUpdate(prevProps,prevState)',
    content: [
      'prevProps: 组件更新前的props',
      'prevState: 组件更新前的state',
      '可以读取，但无法使用DOM的时候，在组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）',
      '返回的任何指都将作为参数传递给componentDidUpdate（)'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default ReactLife