import React from 'react'
import { Circular } from '@components/Icon'
import { Icon } from 'antd-mobile'
import { Jump } from '@unilts';

import './index.less'
import { listTest } from './test'
 
/**
 * @module 列表展示组件
*/
function Index({list = listTest}) {

  const goView = (children = false, title = false) => {
    if(children){
      Jump.go('Content', title)
    }else{
      Jump.go('_404')
    }
  }

  return (
    <div className="DList">
      {
        list.map((item, index) => 
          <div className="DList-Show" key={index} onClick={() => goView(item.children, item.title)}>
            <Circular src={item.src}/>
            <div className="DList-Show-Text">
              <p>{item.title}</p>
              <p>{item.tip}</p>
            </div>
            <Icon className="DList-Show-Arrow" type="right" />
          </div>
        )
      }
    </div>
  )
}

export default Index
