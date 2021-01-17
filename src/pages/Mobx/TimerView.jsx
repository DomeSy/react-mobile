import React, { Component } from 'react';
import { observer } from 'mobx-react';

// 2>创建视图，以响应状态的变化,observer响应视图的变化
@observer
class TimerView extends Component {
  render() {
    return (
      <div>
        <button>{this.props.appState.timer}</button>
      </div>
    );
  }
}

export default TimerView;