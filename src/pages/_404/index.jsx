import React from 'react'
import { Jump } from '@unilts';

import './index.less'

/**
 * @module 404页面
 * 
 * @param text 显示按钮文字
 * @param title 页面title
 * @param back 返回的层数（默认1）
 */
function Index() {
  const { title = false, text = '返回首页', back = -1 } = Jump.get();

  const go = () => {
    if(text === '返回首页'){
      Jump.replace({url: '/'})
      return
    }else{
      Jump.back(back)
    }
  }

  if(title){
    Jump.title(title)
  }

  return (
    <div className="_404">
      <div>
        <button onClick={() => go()}>{text}</button>
      </div>
    </div>
  )
}

export default Index