import React from 'react'
import './index.less'


/**
 * @module 标题
 *
 * @param children 标题
 * @param blue 前面的横杠
 */
function Index({children = `标题`, blue = false}) {
  return (
    <div className="DTitle">
      <div>
        {blue && <p className="DTitle-blue"></p>}
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Index;