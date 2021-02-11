import React from 'react'

import './index.less'

/**
 * @module content 展示内容
 * 
 * @param content 展示内容
 * @param type 类型
 * 
 * @content 说明使用 (默认)
 * @tip 提示内容 
 * @list 数组，用于展示参数 
 */
function Index({content = '', type = 'content'}) {
  return (
    <div className="ContentList">
      {
        (type === 'content' || type === 'tip')
        &&
        <div className={type === 'content' ? 'ContentList-content' : 'ContentList-tip'}>{content}</div>
      }
      {
        type === 'list' &&
          <div className="ContentList-List">
          {
            content.map(item => (
              <div>
                <span>{item.name}</span>
                ：
                <span>{item.value}</span>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Index