import React from 'react'
import HighLight from 'react-highlight'
import "highlight.js/styles/zenburn.css"
import { stripIndent } from 'common-tags'
import './index.less'


/**
 * @module 代码高亮展示模块
 *
 */
function Index({children = ``}) {
  return (
    <HighLight className="EditHight">{
        stripIndent`
          ${children}
        `
      }
    </HighLight>
  )
}

export default Index;