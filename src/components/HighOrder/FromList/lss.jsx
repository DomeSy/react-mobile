import React, { Component } from 'react'
import { List,  InputItem } from 'antd-mobile';
import { Button } from '@components/AntD'
import { createForm } from 'rc-form';
import './index.less';

// 问题1： type除了money，无法向右
// 问题1： 向左的文字高度是固定


// const list = [

// ]

const list = [
  {
    name: '正常标题',
    extra: '右边内容',
    method: 'item',
  },
  {
    name: '右边超出隐藏',
    extra: '右边内容右边内容右边内容右边内容右边内容',
    method: 'item',
  },
  {
    name: '右边超出不隐藏，会换行',
    extra: '右边内容右边内容右边内容右边内容右边内容',
    method: 'item',
    wrap: true
  },
  {
    name: '右边超出不隐藏，会换行',
    extra: '右边内容右边内容右边内容右边内容右边内容',
    brief: '辅助功能',
    method: 'item',
    wrap: true
  },
  {
    name: '银行卡',
    type: 'bankCard',
    value: '',
    placeholder: '',
    edit: '',
    disabled: '',
    clear: '',
    max: ''
  },{
    name: '手机号',
    type: 'phone',
    value: '111'
  },{
    name: '密码',
    type: 'password'
  },{
    name: '数字（带 + - .）',
    type: 'digit',
    placeholder:'数字（带 + - .）'
  },{
    name: '数字（带 .）',
    type: 'money',
    placeholder:'数字（带 .）'
  },{
    name: '文本',
    type: 'text'
  },{
    name: '不可编辑',
    type: 'text',
    value: '不可编辑',
    placeholder: '',
    edit: true
  },{
    name: '禁用',
    type: 'text',
    placeholder: '',
    disabled: true
  },{
    name: '限制长度为8',
    placeholder: '',
    max: '8'
  },{
    name: '清楚效果',
    placeholder: '',
    clear: true
  },{
    name: '额外注释',
    extra: '注释',
    placeholder: '',
    clear: true
  }
]

/**
 * 
 * @param name 左边文字
 * @param extra 右边文字
 * @param method 方式
 * 
 * @method 为item独有的参数
 * @param wrap 右边文字是否隐藏，默认隐藏
 * @param brief 左边文字的辅助功能
 * 
 * @method 为input独有的参数
 * @param type 类型
 * @param value 值
 * @param placeholder 提示语,默认为 请输入 + name 为null时，placeholder为空
 * @param edit 是否可编辑所在的值 默认true
 * @param disabled 是否禁用 默认false
 * @param clear 是否带有清楚按钮 默认false，并且edit为true,disabled为false才生效
 * @param max 最大长度 type为phone不生效
 * 
 * 
 */
@createForm()
class Index extends Component {
  constructor(props){
    super(props)

    this.state = {
      type: 'money'
    }
  }

  click = () => {
    console.log(this.props.form.getFieldsValue(),'11')
  }

  render() {

    const Item = List.Item;
    const Brief = Item.Brief;
    const { type } = this.state
    const { getFieldProps } = this.props.form;
    
    return (

      <div className="FromList">
        {/* <List>
          {
            list.map((item, index) => (
              <Item key={index} extra={item.extra ? item.extra : ''} wrap={item.wrap ? true : false}>
                {item.name}
                {
                  item.brief ? <Brief>{item.brief}</Brief> : ''
                }
              </Item>
            ))
          }
        </List> */}
        <List>
          {
            list.map((item, index) => (
              <div key={index}>
                {
                  item.method === 'item' ?
                  <Item key={index} extra={item.extra ? item.extra : ''} wrap={item.wrap ? true : false}>
                    {item.name}
                    {
                      item.brief ? <Brief>{item.brief}</Brief> : ''
                    }
                  </Item> :
                  <InputItem
                    {...getFieldProps(item.name, {
                      initialValue: item.value ? item.value : '',
                      // editable: item.edit ? false : true

                    })}
                    className="FromList-Input"
                    type={item.type ? item.type : 'text'}
                    extra={item.extra ? item.extra : ''}
                    // value={item.value}
                    // defaultValue={item.value ? item.value : ''}
                    placeholder={item.placeholder ? item.placeholder === null ? '': item.placeholder : `请输入${item.name}`}
                    editable={item.edit ? false : true}
                    disabled={item.disabled ? true : false}
                    clear={item.clear ? true : false}
                    maxLength={item.max ? item.max : ''}
                  >
                    {item.name}
                  </InputItem>
                }
     
              </div>
            )) 
          }
        </List>
        <Button onClick={() => {this.click()}}></Button>
      </div>
    )
  }
}

export default Index