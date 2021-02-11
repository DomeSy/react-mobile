import React, { Component } from 'react'
import { Method } from '@unilts'
import { EditHight } from '@components/Icon'
import './Detail.less'

class Detail extends Component {

  click = () => {
    Method.copy('复制的内容')
  }

  render() {
    return (
      <div>
       Detail
      
      </div>
    );
  }
}

export default Detail;