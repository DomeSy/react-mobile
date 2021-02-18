import React, { Component } from 'react'
import { Button } from '@components/AntD'
import { FromList } from '@components/HighOrder'
import { Modal } from '@unilts' 
import { ComponentShow } from '@unilts'
import { Picker, List, WhiteSpace } from 'antd-mobile';

const lists = [
  // {
  //   name: '正常标题',
  //   extra: '右边内容',
  //   method: 'item',
  // },
  // {
  //   name: '右边超出隐藏',
  //   extra: '右边内容右边内容右边内容右边内容右边内容',
  //   method: 'item',
  // },
  // {
  //   name: '右边超出不隐藏，会换行',
  //   extra: '右边内容右边内容右边内容右边内容右边内容',
  //   method: 'item',
  //   wrap: true,
  // },
  // {
  //   name: '右边超出不隐藏，会换行',
  //   extra: '右边内容右边内容右边内容右边内容右边内容',
  //   brief: '辅助功能',
  //   method: 'item',
  //   wrap: true,
  // },
  // {
  //   name: '银行卡',
  //   type: 'bankCard',
  //   valueName: 'value',
  //   value: '',
  //   placeholder: '',
  //   edit: '',
  //   disabled: '',
  //   clear: '',
  //   max: ''
  // },
  {
    name: '手机号',
    valueName: 'value1',
    type: 'phone',
    value: '111'
  },
  // {
  //   name: '密码',
  //   valueName: 'value2',
  //   type: 'password'
  // },{
  //   name: '数字',
  //   valueName: 'value3',
  //   type: 'number',
  //   placeholder:'数字'
  // },{
  //   name: '文本',
  //   valueName: 'value5',
  //   type: 'text'
  // },{
  //   name: '不可编辑',
  //   valueName: 'value6',
  //   type: 'text',
  //   value: '不可编辑',
  //   placeholder: '',
  //   edit: true
  // },{
  //   name: '禁用',
  //   valueName: 'value7',
  //   type: 'text',
  //   placeholder: '',
  //   disabled: true
  // },{
  //   name: '限制长度为8',
  //   valueName: 'value8',
  //   placeholder: '',
  //   max: '8'
  // },{
  //   name: '不带清楚效果',
  //   valueName: 'value9',
  //   placeholder: '',
  //   clear: true
  // },{
  //   name: '额外注释',
  //   valueName: 'value10',
  //   extra: '注释',
  //   placeholder: '',
  //   clear: true,
  //   require: true,
  // },
  // {
  //   name: '脱敏',
  //   valueName: 'value11',
  //   value: '1769313673',
  //   validate: '176****9673'
  // },
  // {
  //   name: '脱敏',
  //   valueName: 'value12',
  //   value: '1769313673',
  //   edit: true
  // }
]
class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: lists
    }
  }

  click = (list) => {
    console.log(list,'00')
    list.map(item => item.value = '3333')
    this.setState({
      list
    })
  }

  render() {
    const {list} = this.state

    return (
      <div>
        <FromList />
        {/* <Button onClick={() => this.click(list)} /> */}
      </div>
    )
  }
}

export default Index
