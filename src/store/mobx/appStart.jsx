
// 1> 定义状态并使其可观察

import { action, observable } from "mobx";

// observable:拦截，使其可观察
const appState = observable({
  timer: 0
});

setInterval(
  // 通过action来触发状态的变化
  action(function tick(){
    appState.timer += 1
  }),
  1000
)

export default appState;
