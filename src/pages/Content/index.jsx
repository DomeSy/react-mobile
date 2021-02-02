
import React, { Component } from 'react';

import { Accordion } from './component';

import './index.less'
class Index extends Component {

  onChange = (key) => {
    console.log(key);
  }

  render() {
    return (
      <div>
        <Accordion/>
      </div>
    )
  }
}
export default Index
