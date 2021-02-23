const componentDiff = [
  {
    title: '',
    content: [
      'React对不同的组件间的比较，有三种策略'
    ],
    method: 'content',
    type: 'blue'
  },{
    title: 'React 中的 diff 算法',
    content: [
      '同一类型的两个组件，按原策略（层级比较）继续比较Virtual DOM树即可。',
      '同一类型的两个组件，组件A变化为组件B时，可能Virtual DOM没有任何变化，如果知道这点（变换的过程中，Virtual DOM没有改变），可节省大量计算时间，所以 用户 可以通过 shouldComponentUpdate() 来判断是否需要 判断计算。',
      '不同类型的组件，将一个（将被改变的）组件判断为dirty component（脏组件），从而替换 整个组件的所有节点。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: '如果组件D和组件G的结构相似，但是 React判断是 不同类型的组件，则不会比较其结构，而是删除 组件D及其子节点，创建组件G及其子节点。',
    method: 'content',
    type: 'red'
  }
]

export default componentDiff