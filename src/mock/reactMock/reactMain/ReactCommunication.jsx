const ReactCommunication = [
  {
    title: '',
    content: 'React组件通信主要有父传子，子传父，跨层级，使用状态库等',
    method: 'content',
    type: 'blue'
  },
  {
    title: '父传子',
    content: '通过props 来接收',
    method: 'content',
  },
  {
    title: '',
    content:  `
      //父组件传递
      ReactDOM.render(
        <TestClass name="React" />,
        documnent.getElementById('root')
      )
    `,
    method: 'edit',
  },
  {
    title: '',
    content:  `
      //子组件接收
      { this.props.name }
    `,
    method: 'edit'
  },{
    title: '子传父（状态提升）',
    content: '如果父组件传递的是函数，则可以吧子组件信息传入父组件。这个通常称为状态提升',
    method: 'content',
  },
  {
    title: '',
    content:  `
      //父组件传递函数传递给子组件
      click = (value) => {
        console.log(value)
      }

      render(){
        return (
          <div>
            <Test name="React" onClick={this.click}></Test>
          </div>
        )
      }
    `,
    method: 'edit',
  },
  {
    title: '',
    content:  `
      //子组件接收函数，并传递
      render(){

        return (
          <div onClick={() => this.props.onClick(1)}>
            点击
          <div>
        )
      }
    `,
    method: 'edit'
  },{
    title: '',
    content: '父组件的value就是子组件的值，即1',
    method: 'content',
    type: 'red'
  },{
    title: '兄弟组件通信',
    content: ' 找到这两个兄弟节点共同的⽗节点,结合上⾯两种⽅式由⽗节点转发信息进⾏通信',
    method: 'content',
  },{
    title: '跨层级通信',
    content: [
      'Context 设计⽬的是为了共享那些对于⼀个组件树⽽⾔是“全局”的数据，例如当前认证的⽤户、主题 或⾸选语⾔,对于跨越多层的全局数据通过 Context 通信再适合不过',
      '这里不进行讲解，因为建议使用状态库'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '发布订阅模式',
    content: '发布者发布事件，订阅者监听事件并做出反应,我们可以通过引⼊event模块进⾏通信',
    method: 'content',
  },{
    title: '全局状态管理⼯具',
    content: '借助Redux或者Mobx等全局状态管理⼯具进⾏通信,这种⼯具会维护⼀个全局状态中⼼Store,并 根据不同的事件产⽣新的状态',
    method: 'content',
  }
]

export default ReactCommunication