import React from 'react'

import {DraggableArea} from 'react-draggable-tags';

import { DargTest, renderTset, onChangeTest } from './test'
import './index.less'

/**
 * @module 拖拽组件
 * 
 * @param list 数组（必传）
 * @param onChange 产生变化时的函数，接收变化后的数组（必传）
 * @param render 渲染的内容，接收list数组中的每一项，这里当做循环的div就可以（必传）
 * 
 * @list的参数
 * @id 必要的参数，不能相同，就是key，如果不传，则按index
 * @extra 其余什么参数都能传
 * 
 * @render 这里需要注意Draggable组件包裹的组件是有一些默认样式的，比如说display，如果要独占一行，建议使用100vw来沾满
 */
function Index({list = DargTest, onChange=onChangeTest, render=renderTset}) {

  if(!list[0].id){
    list.map((item, index) => item.id = index)
  }

  return (
    <div className="DDragSort">
      <DraggableArea
        initialTags={list}
        render ={({tag}) => render(tag)}
        onChange={(tags) => onChange(tags)}
      />
    </div>
  )
}

export default Index