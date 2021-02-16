import img from '@images/react/v160.png'
const Reactv160 = [
  {
    title: '',
    content: 'React v16.0主要分为四个阶段,分别是Initialization、Mounting、Updation、Unmounting四个阶段',
    method: 'content',
    type: 'blue'
  },
  {
    content: img,
    height: '200px',
    style: 'height:200px;width:100%',
    method: 'imgs'
  },
  {
    title: '初始化(initialization)阶段',
    content: [
      {
        name: 'constructor中的super',
        value: 'super(props) ⽤来调⽤基类的构造⽅法( constructor() ), 也将⽗组件的props注⼊给⼦组件，功⼦组件读取(组件中props只读不可变，state可变)。'
      },{
        name: 'constructor()',
        value: '⽤来做⼀些组件的初始化⼯作，如定义this.state的初始内容。'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '挂载(Mounting)阶段',
    content: [
      {
        name: 'componentWillMount',
        value: '在组件挂载到DOM前调⽤，且只会被调⽤⼀次，在这边调⽤this.setState不会引起组件重新渲染，也可以把写在这边的内容提前到constructor()中，所以项⽬中很少⽤。'
      },{
        name: 'render',
        value: '根据组件的props和state（⽆两者的重传递和重赋值，论值是否有变化，都可以引起组件重新render），return ⼀个React元素（描述组件，即UI），不负责组件实际渲染⼯作，之后由React⾃身根据此元素去渲染出⻚⾯DOM'
      },{
        name: 'componentDidMount',
        value: '组件挂载到DOM后调⽤，且只会被调⽤⼀次'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '更新(update)阶段',
    content: `此阶段：setState引起的state更新或⽗组件重新render引起的props更新，更新后的state和props相对之前⽆论是否有变化，都将引起⼦组件的重新render。`,
    method: 'content',
  },
  {
    title: '',
    content: `此阶段分为componentWillReceiveProps，shouldComponentUpdate，componentWillUpdate，render，componentDidUpdate`,
    method: 'content',
  },
  {
    title: 'componentWillReceiveProps(nextProps)',
    content: [
      '此⽅法只调⽤于props引起的组件更新过程中，参数nextProps是⽗组件传给当前组件的新props。',
      '但⽗组件render⽅法的调⽤不能保证重传给当前组件的props是有变化的，所以在此⽅法中根据nextProps和this.props来查明重传的props是否改变，以及如果改变了要执⾏啥，⽐如根据新的props调⽤this.setState出发当前组件的重新render'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'shouldComponentUpdate(nextProps, nextState)',
    content: [
      '此⽅法通过⽐较nextProps，nextState及当前组件的this.props，this.state，返回true时当前组件将继续执⾏更新过程，返回false则当前组件更新停⽌，以此可⽤来减少组件的不必要渲染，优化组件性能。',
      '这边也可以看出，就算componentWillReceiveProps()中执⾏了this.setState，更新了state，但在render前（如shouldComponentUpdate，componentWillUpdate），this.state依然指向更新前的state，不然nextState及当前组件的this.state的对⽐就⼀直是true了。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'componentWillUpdate(nextProps, nextState)',
    content: [
      '此⽅法在调⽤render⽅法前执⾏，在这边可执⾏⼀些组件更新发⽣前的⼯作，⼀般较少⽤'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'componentDidUpdate(prevProps, prevState)',
    content: [
      '此⽅法在组件更新后被调⽤，可以操作组件更新的DOM，prevProps和prevState这两个参数指的是组件更新前的props和state'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '卸载阶段',
    content: [
      {
        name: 'componentWillUnmount',
        value: '此⽅法在组件被卸载前调⽤，可以在这⾥执⾏⼀些清理⼯作，⽐如清楚组件中使⽤的定时器，清楚componentDidMount中⼿动创建的DOM元素等，以避免引起内存泄漏。'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '造成组件更新有两类（三种）情况',
    content: [
      {
        name: '⽗组件重新render',
        value: '直接使⽤,每当⽗组件重新render导致的重传props，⼦组件将直接跟着重新渲染，⽆论props是否有变化。可通过shouldComponentUpdate⽅法优化。'
      },
      {
        name: '⽗组件重新render',
        value: '在componentWillReceiveProps⽅法中，将props转换成⾃⼰的state'
      },
      {
        name: '组件本身调⽤setState',
        value: '⽆论state有没有变化。可通过shouldComponentUpdate⽅法优化'
      },
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '',
    content: '注：(componentWillReceiveProps)中调⽤ this.setState() 将不会引起第⼆次渲染。',
    method: 'content',
    type: 'red'
  },
  {
    title: '',
    content: '因为componentWillReceiveProps中判断props是否变化了，若变化了，this.setState将引起state变化，从⽽引起render，此时就没必要再做第⼆次因重传props引起的render了，不然重复做⼀样的渲染了。',
    method: 'content',
    type: 'red'
  },
  {
    title: '函数一开始执行的顺序',
    content: [
      'constructor => componentWillMount => componentDidMount => render => componentDidMount'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '当父组件触发，更改子组件（Child）的顺序',
    content: [
      'shouldComponentUpdate => componentWillUpdate => render => componentDidUpdate',
      '而父组件在render之后会执行子组件 componentWillReceiveProps'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'shouldComponentUpdate 钩子可以作为一个优化的点，返回一个布尔值',
    content: [
      '作用：可以判断子组件是否需要更新，如果不需要可以返回 false，需要更新则返回true，默认为true',
      '如果设置为false：则只会走完shouldComponentUpdate，之后的钩子都不会执行'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '卸载阶段',
    content: [
      '当组件不需要存在的时候则会执行componentWillUnmount'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Reactv160