import React, { Component } from 'react'
import { EditHight, Title, ContentList, Buttom } from '@components/Icon'
import { connect } from 'react-redux'
import Zmage from 'react-zmage'
import { Jump, ComponentShow } from '@unilts'

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
 * @param component => ComponentShow组件
 * @param imgs => 配置图片
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
  constructor(props){
    super(props)
  }

  componentDidMount = () => {
    const { name, extra:{noTitle = false} } = this.props.detail;
    Jump.title(noTitle ? Jump.get().name : name)
  }


  render() {
    const { data, name, extra:{noTitle = false} } = this.props.detail;

    console.log(data, '000')
    return (
      <div className="Detail">
        <Title>{Jump.get().name}{noTitle ? '':  <>({name})</>}</Title>
        <div className="Detail-Content">
          {
            data.map((item, index) => (
              <div key={index}>
                { item.title &&  <Title blue>{item.title}</Title>}
                {
                  item.method === 'edit' ?
                  <EditHight copy={item.copy}>{item.content}</EditHight> :
                  item.method === 'content' ?
                  <ContentList content={item.content} type={item.type} /> :
                  item.method === 'component' ? 
                    ComponentShow[item.content]() :
                  item.method === 'imgs' ?
                  <div className='Detail-img'> 
                    <Zmage style={{height: item.height}} src={item.content} /> 
                  </div> :
                  <></>
                }
              </div>
            ))
          }
        </div>
        <Buttom content={noTitle ? Jump.get().name : name} />
      </div>
    );
  }
}

export default Detail;