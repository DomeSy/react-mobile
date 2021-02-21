import img from '@images/react/v164.png'
const Reactv164 = [
  {
    title: '',
    content: 'React v16.4主要分为三个阶段,分别是创建时、更新时、卸载时三个阶段',
    method: 'content',
    type: 'blue'
  },
  {
    name: '生命周期16.4',
    content: img,
    height: '200px',
    style: 'height:200px;width:100%',
    method: 'imgs'
  },
  {
    title: '挂载阶段',
    content: [
      {
        name: 'constructor',
        value: '构造函数，最先被执⾏,我们通常在构造函数⾥初始化state对象或者给⾃定义⽅法绑定this'
      },{
        name: 'static getDerivedStateFromProps',
        value: '这是个静态⽅法,当我们接收 到新的属性想去修改我们state，可以使⽤getDerivedStateFromProps'
      },{
        name: 'render',
        value: 'render函数是纯函数，只返回需要渲染的东⻄，不应该包含其它的业务逻辑,可以返回原⽣的DOM、React 组件、Fragment、Portals、字符串和数字、Boolean和null等内容'
      },{
        name: 'componentDidMount',
        value: '组件装载之后调⽤，此时我们可以获取到DOM节点并操作，⽐如对canvas，svg的操作，服 务器请求，订阅都可以写在这个⾥⾯，但是记得在componentWillUnmount中取消订阅'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '更新阶段',
    content: [
      {
        name: 'getDerivedStateFromProps',
        value: '此⽅法在更新个挂载阶段都可能会调⽤'
      },{
        name: 'shouldComponentUpdate',
        value: 'shouldComponentUpdate(nextProps, nextState) ,有两个参数nextProps和nextState，表示 新的属性和变化之后的state，返回⼀个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回 true,我们通常利⽤此⽣命周期来优化React程序性能'
      },{
        name: 'render',
        value: '更新阶段也会触发此⽣命周期'
      },{
        name: 'getSnapshotBeforeUpdate',
        value: 'getSnapshotBeforeUpdate(prevProps, prevState) ,这个⽅法在render之后， componentDidUpdate之前调⽤，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有 ⼀个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，可以返回null，此⽣命周期必须 与componentDidUpdate搭配使⽤'
      },{
        name: 'componentDidUpdate',
        value: 'componentDidUpdate(prevProps, prevState, snapshot) ,该⽅法在getSnapshotBeforeUpdate ⽅法之后被调⽤，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot。 第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要⽤到 DOM 元素的状态，则将对⽐或 计算的过程迁移⾄ getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统⼀触发回调或更新状态。'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '卸载阶段',
    content: [
      {
        name: 'componentWillUnmount',
        value: '当我们的组件被卸载或者销毁了就会调⽤，我们可以在这个函数⾥去清除⼀些定时器，取 消⽹络请求，清理⽆效的DOM元素等垃圾清理⼯作'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'static getDerivedStateFromProps',
    content: [
      {
        name: '含义',
        value: '从props中获取state，是一个静态函数，也就是这个函数不能通过 this 访问到class 属性，也并不推荐直接访问属性。而是应该通过参数提供的nextProps以及prevState来进行判断，根据新传入的props来映射到state。'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'getSnapshotBeforeUpdate（一般和conponentDIdUpdate配合使用）',
    content: [
      {
        name: '执行',
        value: '在render之后conponentDidUpdate之前'
      },{
        name: '含义',
        value: '可以读取但无法使用DOM的时候。可以在组件更改之前从DOM捕获一些信息（如：滚动位置）。'
      },{
        name: '有两个参数',
        value: 'prevProps, prevState,表示之前的属性和状态，有返回值，可以为null，并且会作为componentDidUpdate的第三个参数'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '',
    content:  `
      class ScrollingList extends React.Component {
        constructor(props) {
          super(props);
          this.listRef = React.createRef();
        }
        getSnapshotBeforeUpdate(prevProps, prevState) {
          // 我们是否要添加新的 items 到列表？
          // 捕捉滚动位置，以便我们可以稍后调整滚动
          if(prevProps.list.length < this.props.list.length) {
            const list = this.listRef.current;
            return list.scrollHeight - list.scrollTop
          }
          return null;
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
          // 如果我们有snapshot的值，我们已经添加了心得items
          // 调整滚动以至于这些新的items 不会将旧的items推出视图
          // snapshot 是 getSnapshotBeforeUpdate 方法的返回值
          if(snapshot !== null){
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
          }
        }
        render(){
          return (
            <div ref={this.listRef}></div>
          )
        }
      }
    `,
    method: 'edit',
    copy: true
  }
]

export default Reactv164