import React, { Component } from 'react'
import { EditHight, Title, ContentList } from '@components/Icon'
import { connect } from 'react-redux'
import { Jump } from '@unilts'

import './Detail.less'

/**
 * @module 详情配置
 * 
 * @param title 文章标题
 * @param content 内容
 * @param method 显示组件的方式
 * 
 * @method
 * @param edit => EditHight组件
 * @param content => ContentList组件
 * 
 * @edit
 * @param copy 是否复制
 * 
 * @content
 * @param type 选择组件的类型
 * @type blue 字体为蓝色
 * @type normal 字体为黑色
 * @type note 红色
 * @type list => content 为数组 参数 name 属性名， value： 属性值
 * 
 */
@connect(({ detail }) => ({...detail}))
class Detail extends Component {

  render() {
    const { detail } = this.props;

    return (
      <div className="Detail">
        <Title>{Jump.get().params}({detail.name})</Title>
        {
          detail.data.map((item, index) => (
            <div key={index}>
              { item.title &&  <Title blue>{item.title}</Title>}
              {
                item.method === 'edit' ?
                <EditHight copy={item.copy}>{item.content}</EditHight> :
                item.method === 'content' ?
                <ContentList content={item.content} type={item.type} /> :
                <></>
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Detail;