import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@components/AntD';
import './Counter.less'
import * as counterActions from '@actions/counter'

@connect(({counter}) => ({counter}), {...counterActions})
class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <Button onClick={() => this.props.add()}>+</Button>
        <Button onClick={() => this.props.minus()}>-</Button>
        <Button onClick={() => this.props.asyncAdd()}>async</Button>
        <div className="Counter-Result">结果{this.props.counter.num}</div>
      </div>
    );
  }
}

export default Counter;