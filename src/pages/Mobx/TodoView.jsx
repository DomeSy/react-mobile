import React, { Component } from 'react';
import { observer } from 'mobx-react';

// 类组件可用装饰器
@observer
class todoView extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>TodoList</h1>
        {
          this.props.todoStore.todos.map(todo => <Todo key={todo.id} todo={todo} change={this.props.todoStore.change}/>)
        }
        <p>未完成任务：{this.props.todoStore.unfinishedCount}个</p>
      </div>
    );
  }
}

export default todoView;

// 不加入observer时，值发生改变，但视图未变，加入observer，使之变为响应式
const Todo = observer(({todo, change}) =>{
  return <div> 
    <input type="checkbox" checked={todo.finished}
      // onChange={() => (todo.finished = !todo.finished)}
      onChange={() => change(todo)}
    />
    {todo.title}
  </div>
})
