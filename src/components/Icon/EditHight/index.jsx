import React from 'react'
import HighLight from 'react-highlight'
import "highlight.js/styles/zenburn.css"
import { stripIndent } from 'common-tags'
import { Method } from '@unilts';
import './index.less'


/**
 * @module 代码高亮展示模块
 *
 * @param children 高亮的内容
 * @param copy 是否复制，默认false
 */
function Index({children = ``, copy = false}) {

  const goCopy = (children) => {
    Method.copy(children)
  }

  return (
    <div className="EditHight">
      {copy && <div className="EditHight-copy" onClick={() => goCopy(children)}></div>}
      <HighLight className="EditHight-centent">
        {
          stripIndent`${children}`
        }
      </HighLight>
    </div>
    
  )
}

export default Index;