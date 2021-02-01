import React from 'react'
import './index.less'


/**
 * @module 标题
 *
 */
function Index({children = `标题`}) {
  return (
    <div className="DTitle">
      <div>{children}</div>
    </div>
  )
}

export default Index;