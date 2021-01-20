import React, { Component } from 'react';

import { Button } from '@components/AntD';
import './Counter.less'

class Counter extends Component {
  render() {
    return (
      <div>
        <Button>+</Button>
      </div>
    );
  }
}

export default Counter;