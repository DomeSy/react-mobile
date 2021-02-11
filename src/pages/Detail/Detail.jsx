import React, { Component } from 'react';

import './Detail.less'
import copy from 'copy-to-clipboard'

class Detail extends Component {

  click = () => {
    copy('aaa')
    
  }

  render() {
    return (
      <div onClick={() => this.click()}>
       Detail
      </div>
    );
  }
}

export default Detail;