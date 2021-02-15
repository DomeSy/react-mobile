import React from 'react'
import { Circular } from '@components/Icon'
import { Button } from 'antd-mobile';

import './index.less'
// import { listTest } from './test'
 
/**
 * @module 按钮
*/
function Index({children, onClick=()=>{}, type="primary"}) {
  return (
    <div className="DButton">
      <Button className="DButton-btn" type={type} onClick={() => onClick()}>{children || '确认'}</Button>
    </div>
  )
}

export default Index
