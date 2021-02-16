const setState = [
  {
    title: '',
    content: '即时同步也是异步，但大多数情况下是异步',
    method: 'content',
    type: 'blue'
  },
 
  {
    title: '使用setState的方式',
    content: [
      {
        name: '对象',
        value: 'setState( { } )'
      },{
        name: '回调函数',
        value: 'setState(cb)'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'setState的特性',
    content: [
      '状态是封闭的，只有组件自己能够访问和修改',
      '批量执行：对于同一个key多次操作并合并，也就是只执行最后一次。多个key会一次执行'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'setState的同步情况，即获取到最新状态的值',
    content: [
      '传递参数给setState',
      '在setState中的第二个参数的回调函数也可以获取到',
      '定时器：将延迟时间设置为0秒（原因：事件循环)',
      '原生事件中（原因跳过了React的事件机制）'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '示例',
    content:  `
      componentDidMount(){
        const { counter } = this.state;
        
        /*批量操作*/
        this.setState({ counter: counter + 1 });
        this.setState({ counter: counter + 1 });
        this.setState({ counter: counter + 1 });
        
        /*异步*/
        console.log( counter );      => 1
        
        
        /*同步获取最新值*/
        /*传递参数给setState*/
        /* 第一个参数prevState:相当于this.state 第二个为props */
        this.setState((prevState, props)=>{
          console.log( prevState.counter );      => 2
          return prev.counter;
        });
        
        /*在setState中的第二个参数的回调函数*/
        this.setState({ counter:counter +1 },()=>{
          console.log( counter );      => 2
        })
        
        /*定时器*/
        setTimeout(()=>{
          console.log( counter );      => 2
        },0)
        
        /*原生事件*/
          document.body.addEventListener('click',this.changeCounter);
        }
        changeCounter = () => {
          const { counter } = this.state;
          this.setState({ counter: counter + 1 });
          console.log( counter );      => 3
        }
    `,
    method: 'edit',
    copy: true
  }
]

export default setState