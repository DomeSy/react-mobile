import React, { Component } from 'react'
import { Method } from '@unilts'

import './Detail.less'

class Detail extends Component {

  click = () => {
    Method.copy('复制的内容')
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