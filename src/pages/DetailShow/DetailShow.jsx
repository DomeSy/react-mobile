import React, { Component } from 'react'
import { Button } from '@components/AntD'
import { FromList } from '@components/HighOrder'
import { Modal } from '@unilts' 
import { ComponentShow } from '@unilts'
import { Picker, List, WhiteSpace } from 'antd-mobile';
class Index extends Component {
  render() {
    return (
      <div>
        <FromList />
      </div>
    )
  }
}

export default Index
