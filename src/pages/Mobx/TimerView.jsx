import React, { Component } from 'react';
import { observer } from 'mobx-react';

// 2>创建视图，以响应状态的变化,observer响应视图的变化
@observer
class TimerView extends Component {

  onReset = () => {
    this.props.appState.resetTimer(); 
  }

  render() {
    return (
      <div>
        <button onClick={this.onReset}>{this.props.appState.timer}</button>
      </div>
    );
  }
}

export default TimerView;