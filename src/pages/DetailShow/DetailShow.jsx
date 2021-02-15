import React, { Component } from 'react'
import { Button } from '@components/AntD'
import { Modal } from '@unilts' 
import { ComponentShow } from '@unilts'
class Index extends Component {
  render() {
    return (
      <div>
        {ComponentShow.Modal()}
      </div>
    )
  }
}

export default Index
