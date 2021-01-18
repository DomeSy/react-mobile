import { action, autorun, computed, configure, observable } from "mobx";

// 不允许在动作外部修改状态
/**
 * enforceActions: 严格模式
 *   never: 可以在任意地方修改状态（默认）
 *   observed: 在某处观察到的所有状态都需要通过动作进行更改。（推荐使用，在正式项目中使用）
 *   always: 状态始终需要通过动作来更新(实际上还包括创建)
 */
configure({enforceActions: 'observed'})

class TodoStore {
  @observable todos = [
    {
      
      id: 0,
      finished: false, // 标记任务是否完成
      title: "任务0" // 定义任务名
    },
    {
      id: 1,
      finished: true, 
      title: "任务1"
    },
    {
      id: 2,
      finished: false,
      title: "任务2"
    }
  ];

  // 计算
  @computed get unfinishedCount(){
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action change(todo){
    todo.finished = !todo.finished
  }
}

const todoStore = new TodoStore();

// 自定义 reactions
// 使用autorun、reaction和when函数即可简单的创建自定义reactions，如：打印日志
autorun(() => {
  console.log('剩余任务：' + todoStore.unfinishedCount + '个')
})

export default todoStore