import React from 'react'
import Base from '@images/icon/base.png'

import './index.less'

/**
 * @module 小图标
 * 
 * @param src 接收的图片地址，
 * @param block 形状方形，默认圆形
 */

function index({src = Base, block = false}) {
  return (
    <div className={block ? "Circular" : "Circular Circular-Active"}>
      <img src={src} alt=""/>
    </div>
  )
}

export default index
