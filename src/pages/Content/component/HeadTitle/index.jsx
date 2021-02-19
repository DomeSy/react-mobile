import React from 'react'
import { Jump } from '@unilts'
import { Circular } from '@components/Icon'
import { MagicText } from '@components/Animation'

import './index.less'

export default function index({data={}}) {

  return (
    // 如果对你有帮助，请点击右上方的gitHub，给个Star！
    <div className="HeadTitle">
    <div className="HeadTitle-git"><p onClick={() => Jump.href('https://github.com/DomeSy/React-mobile-Domesy')}></p></div>
    <div className="HeadTitle-title">
      <Circular block src={data.src} />
      <div className="HeadTitle-title-name">{data.title}</div>
    </div>
    <MagicText text={`${data.content}`} />
  </div>
  )
}

