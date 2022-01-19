import React from 'react'
import { Jump } from '@/utils';

import './index.less'

/**
 * @module 404页面
 * 
 */
const Index:React.FC<any> = () => {
  let text = '返回首页'

  const go = () => {
    Jump.go('/')
  }

  return (
    <div className="_404">
      <div>
        <button onClick={() => go()}>{text}</button>
      </div>
    </div>
  )
}

export default Index