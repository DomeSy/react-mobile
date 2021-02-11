import React, { Component } from 'react'
import { Method } from '@unilts'
import { EditHight, Title } from '@components/Icon'
import './Detail.less'

class Detail extends Component {

  click = () => {
    Method.copy('复制的内容')
  }

  render() {
    return (
      <div className="Detail">
       <Title>Domesy</Title>
      
      </div>
    );
  }
}

export default Detail;