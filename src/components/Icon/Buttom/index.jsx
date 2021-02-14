import React from 'react'
import { Jump } from '@unilts';

import './index.less'

function Index(content = '本项目') {
  return (
    <div className="DButton">
      <div></div>
      <div>
        <span>空白：</span>
        <span>如果本项目对你有帮助，请一定不要吝惜你的Star！</span>
        <p onClick={() => Jump.href('https://github.com/DomeSy/React-mobile-Domesy')}></p>
      </div>
    </div>
  )
}

export default Index
