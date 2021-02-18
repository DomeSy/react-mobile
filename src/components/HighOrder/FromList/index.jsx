import React, { Component } from 'react'
import { List,  InputItem } from 'antd-mobile';
import { Button } from '@components/AntD'
import { createForm } from 'rc-form';
import './index.less';

// 问题1： type除了money，无法向右
// 问题1： 向左的文字高度是固定


// const list = [

// ]

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
  // },{
  //   name: '手机号',
  //   valueName: 'value1',
  //   type: 'phone',
  //   value: '111'
  // },{
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
  {
    name: '电话号码',
    valueName: 'value12',
    value: '',
    type: 'phone',
  }
]

// 脱敏格式下，不能修改值，也就是edit，并且value必填，即未脱敏的值

/**
 * 
 * @param list 数据
 * @param left 字体向左，只支持Input类型，默认向右
 * 
 * @param name 左边文字
 * @param extra 右边文字
 * @param method 方式
 * @param itemValue 表单的属性值，必填
 * 
 * @method 为item独有的参数
 * @param wrap 右边文字是否隐藏，默认隐藏
 * @param brief 左边文字的辅助功能
 * 
 * @method 为input独有的参数
 * @param type 类型
 * @param value 值 不传默认为空
 * @param placeholder 提示语,默认为 请输入 + name 为null时，placeholder为空
 * @param edit 是否可编辑所在的值 默认false
 * @param disabled 是否禁用 默认false
 * @param clear 是否带有清楚按钮 默认为true，并且edit为true,disabled为false才生效
 * @param max 最大长度 type为phone不生效
 * @param validate 脱敏格式下，不能修改值，也就是edit，并且value必填，即未脱敏的值
 * 
 */

const validateTel = (rule, value, callback) => {
  if (value && value.length===13) {
      callback();
  } else if(value.length===0){
      callback(new Error('请输入电话号码'));
  } else {
      callback(new Error('电话号码不合法'));
  }
}
@createForm()
class Index extends Component {
  constructor(props){
    super(props)

    this.state = {
      type: 'money',
      list: this.props.list || lists
    }
  }

  click = () => {
    console.log(this.props.form.getFieldsValue(),'11')
  }

  validateTel = (rule, value, callback) => {
    if (value && value.length===13) {
        callback();
    } else if(value.length===0){
        callback(new Error('请输入电话号码'));
    } else {
        callback(new Error('电话号码不合法'));
    }
  }

  onChange = (e, item, list) => {
    if(item.validate) return
    list.map(ele => item.name === ele.name ? ele.value = e : '');
    console.log(list,'000')
    this.setState({
      list
    })
  }

  render() {

    const Item = List.Item;
    const Brief = Item.Brief;
    const { type, list } = this.state
    const { form:{getFieldProps, getFieldError}, left } = this.props;
    
    return (

      <div className="FromList">
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
                    {...getFieldProps(item.valueName, {
                      initialValue: item.value ? item.value : ''
                    })}
                    // error={!!getFieldError(item.valueName)}
                    // error={true}
                    onErrorClick={() => {
                      // console.log(getFieldError(item.valueName))
                      // Toast.info(getFieldError(item.valueName), 1);
                    }}
                    
                    className={left ? "FromList-Input" : "FromList-Input FromList-Right"}
                    type={item.type ? item.type : 'text'}
                    extra={item.extra ? item.extra : ''}
                    value={item.validate ? item.validate : item.value}
                    onChange={(e)=> this.onChange(e, item, list)}
                    placeholder={item.placeholder ? item.placeholder === null ? '': item.placeholder : `请输入${item.name}`}
                    editable={item.validate ? false : item.edit ? false : true}
                    disabled={item.disabled ? true : false}
                    clear={item.clear ? false : true}
                    maxLength={item.max ? item.max : ''}
                  >
                    {item.name}
                  </InputItem>
                }
     
              </div>
            )) 
          }
          {/* <InputItem
            {...getFieldProps(list[0].valueName, {
                rules: [
                { validator: validateTel},
                ],
            })}
            error={!!getFieldError(list[0].valueName)}
            onErrorClick={() => {
                console.log(getFieldError(list[0].valueName))
              }}
            clear
            type="phone"
            placeholder="请输入"
            >
            <span>电话号码</span>
          </InputItem> */}
        </List>
        <Button onClick={() => {this.click()}}></Button>
      </div>
    )
  }
}

export default Index