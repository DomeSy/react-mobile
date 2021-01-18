import React, { Component } from 'react';
import { inject, Observer, observer, useObserver } from 'mobx-react';

// 类组件可用装饰器
@inject('todoStore')
@observer
class todoView extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      count: 0
    }
  }

  render() {

    const { input, count } = this.state;
    console.log(this.props)
    return (
      <div>
        <h1>TodoList</h1>

      <input type="text" value={input} onChange={e => this.setState({input: e.target.value})} />
      <button onClick={() => this.setState({count: count+1})}>add click {count}</button>
        {
          this.props.todoStore.todos.map(todo => <Todo key={todo.id} todo={todo} change={this.props.todoStore.change}/>)
        }
        <p>未完成任务：{this.props.todoStore.unfinishedCount}个</p>
        <Child count={{count}}/>
      </div>
    );
  }
}

export default todoView;4

// React.memo好处，当state发生变化是，与当前的组件无关，则可以做个缓存使其不用刷星
const Child = React.memo(props => {
  console.log("child props");
  return <div>Child</div>
},
  (prevProps, nextProps) => prevProps.count.count  === nextProps.count.count
)

// 如何给组件添加响应式
// 不加入observer时，值发生改变，但视图未变，加入observer，使之变为响应式
// 方法1: observer hoc(高阶组件： 接收组件为参数并且返回一个新组件的函数)
// const Todo = observer(({todo, change}) =>{
//   console.log('todo Props')
//   return <div> 
//     <input type="checkbox" checked={todo.finished}
//       // onChange={() => (todo.finished = !todo.finished)}
//       onChange={() => change(todo)}
//     />
//     {todo.title}
//   </div>
// })

// 方法二：observer component 组件形式，中间是以函数的形式，但前提是以函数的形式
// const Todo = ({todo, change}) =>{
//   return (
//     <Observer>
//       {
//         () => (
//           <div>
//             <input type="checkbox" checked={todo.finished} onChange={() => change(todo)} name="" id=""/>
//             {todo.title}
//           </div>
//         )
//       }
//     </Observer>
//   )
// }

// 方法三 useObserver hook
const Todo = ({todo, change}) => {
  return useObserver(() => (
    <div>
      <input type="checkbox" checked={todo.finished} onChange={() => change(todo)} />
      {todo.title}
    </div>
  ))
}