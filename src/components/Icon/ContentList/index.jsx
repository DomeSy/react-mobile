import React from 'react'

import './index.less'

/**
 * @module content 展示内容
 * 
 * @param content 展示内容
 * @param type 类型
 * 
 * @normal 说明 (默认)
 * @content 说明内容（字体蓝色） 
 * @tip 提示内容 
 * @list 数组，用于展示参数 
 */
function Index({content = '', type = 'normal'}) {
  return (
    <div className="ContentList">
      {
        (type === 'normal' || type === 'content' || type === 'tip')
        &&
        <div className={type === 'normal' ? 'ContentList-content ContentList-normal' : type === 'content' ? 'ContentList-content' : 'ContentList-tip'}>{content}</div>
      }
      {
        type === 'list' &&
          <div className="ContentList-List">
          {
            content.map((item, index) => (
              <div key={index}>
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