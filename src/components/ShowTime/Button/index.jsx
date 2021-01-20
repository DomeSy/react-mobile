import React from 'react'
import { Circular } from '@components/Icon'
import { Button } from 'antd-mobile';

import './index.less'
// import { listTest } from './test'
 
/**
 * @module 按钮
*/
function Index({children, onClick=()=>{}}) {
  return (
    <div className="DButton">
      <Button type="primary" onClick={() => onClick()}>{children || '确认'}</Button>
    </div>
  )
}

export default Index
