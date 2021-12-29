import React from 'react'
import { Circular } from '@components/Icon'
import { Button } from 'antd-mobile-v2';

import './index.less'
// import { listTest } from './test'
 
/**
 * @module 按钮
 * 
 * @param type primary蓝色（默认）default 白色 warning 红色
*/
function Index({children, onClick=()=>{}, type="primary"}) {
  return (
    <div className="DButton">
      <Button className="DButton-btn" type={type} onClick={() => onClick()}>{children || '确认'}</Button>
    </div>
  )
}

export default Index
