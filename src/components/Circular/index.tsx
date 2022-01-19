
import React from 'react';

import './index.less'

interface CircularProps {
  src: string, //接收的图片地址，
  block?: boolean //形状方形，默认圆形
}

const Circular:React.FC<CircularProps> = ({src, block }) => {
  return (
    <div className={block ? "Circular" : "Circular Circular-Active"}>
      { src && <img src={src} alt=""/> }
    </div>
  )
}

export default Circular
