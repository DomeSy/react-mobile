import React from 'react'
import { Circular } from '@components/Icon'
import { Icon } from 'antd-mobile';

import './index.less'
import { listTest } from './test'
 
/**
 * @module 列表展示组件
*/
function Index({list = listTest}) {
  return (
    <div className="DList">
      '你好'
    </div>
  )
}

export default Index
