import React, { Component } from 'react'
import { Method } from '@unilts'
import { EditHight, Title, ContentList } from '@components/Icon'
import './Detail.less'

class Detail extends Component {

  click = () => {
    Method.copy('复制的内容')
  }

  render() {
    const text = [
      {
        name: 'param',
        value: '作为展示使用'
      },
      {
        name: 'param',
        value: '作为展示使用作为展示使用作为展示使用作为展示使用作为展示使用'
      },{
        name: 'param',
        value: '作为展示使用'
      }
    ]

    return (
      <div className="Detail">
       {/* <Title>Domesy</Title> */}
        <ContentList content={text} type='list' />
      </div>
    );
  }
}

export default Detail;