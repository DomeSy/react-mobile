import React, { Component } from 'react'
import { List,  InputItem, Picker, DatePicker } from 'antd-mobile';
import { Button } from '@components/AntD'
import { createForm } from 'rc-form';
import { Method, Modal } from '@unilts';

import listTest from './test'
import './index.less';

// 问题1： type除了money，无法向右
// 问题1： 向左的文字高度是固定

// * @param data 数组 格式 label名称， value值， children 子数组
// * @param cols 列数 即你有几级联动填多少（默认为1）
// * @param cascade 是否级联 默认为true，不级联时没有children，并且在2级以上
// * @param extra 右边的文字默认请选择
// * @param title 选择器的头部
// * @param okText 确定按钮，默认确定
// * @param dismissText 取消按钮，默认取消

// 脱敏格式下，不能修改值，也就是edit，并且value必填，即未脱敏的值

// 错误提示： 满足条件， 不满足条件， 为空， => 实际上只有两种， 一种是为空， 一种是不满足条件（且这种必须是有规则这个属性的）

// 有选择器则为必选的
/**
 * 
 * @param list 数据
 * @param left 字体向左，只支持Input类型，默认向右
 * @param submit 提交按钮文字
 * @param reset 重置按钮文字
 * @param hidden 隐藏重置按钮
 * @param onSubmit 状态提升，如果全部通过校验则会返回值，否则不会
 * 
 * @公共的参数
 * @param name 左边文字（必填）
 * @param extra 右边文字
 * @param method 方式（不填默认为input）
 * @param itemValue 表单的属性值，（必填）
 * 
 * @method 为item独有的参数
 * @param wrap 右边文字是否隐藏，默认隐藏
 * @param brief 左边文字的辅助功能
 * 
 * @method 为input独有的参数
 * @param type 类型 => bankCard password number text等
 * @param value 值 不传默认为空
 * @param placeholder 提示语,默认为 请输入 + name 为null时，placeholder为空
 * @param edit 是否可编辑所在的值 默认false
 * @param disabled 是否禁用 默认false
 * @param clear 是否带有清楚按钮 默认为true，并且edit为true,disabled为false才生效
 * @param max 最大长度 type为phone不生效
 * @param validate 脱敏格式下，不能修改值，也就是edit，并且value必填，即未脱敏的值
 * @param rules 规则，函数，返回布尔值(规则存在，也就是必填)
 * @param required 是否必填
 * @param errorMsg 错误信息 （默认是placeholder)
 * @param rulesMsg 错误信息 （rules必须存在,不满足条件的情况，为空的则是errorMsg)
 * 
 * @method 为pick独有的参数
 * @param data 数组 格式 label名称， value值， children 子数组
 * @param cols 列数 即你有几级联动填多少（默认为1）
 * @param cascade 是否级联 默认为true，不级联时没有children，并且在2级以上
 * @param extra 右边的文字默认请选择
 * @param title 选择器的头部
 * @param okText 确定按钮，默认确定
 * @param dismissText 取消按钮，默认取消
 * @param value 默认值，必选与选择是的值一样，并且这个值必须存在，否则为空
 * 
 * @method 为date独有的参数
 * @param mode 日期的方式 默认date 还有 time datetime year month
 * @param min 最小时间
 * @param max 最大时间
 * @param title 文章标题
 * @param extra 右边的文字默认请选择
 */

@createForm()
class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: 'money',
      list: this.props.list || listTest,
      date: new Date(),
    }
  }

  componentDidMount = () => {
    const list = this.props.list || listTest
    let FromList = [];
    list.map(item => {
      const arr = {
        value: item.value || '',
        error: item.error ? false : true
      }
      FromList = [...FromList, arr] 
    })
    sessionStorage.setItem('FromList', JSON.stringify(FromList))
  }

  // 错误提示
  onError = (item, flag) => {
    if((item.value && item.rulesMsg) && (item.rules && item.rulesMsg)){
      if(!flag) Modal.info(item.rulesMsg, 1)
      return item.rulesMsg
    }
   
    if(item.errorMsg){
      if(!flag) Modal.info(item.errorMsg, 1)
      return item.errorMsg
    }else{
      const errorMsg = item.placeholder ? item.placeholder : `请输入${item.name}`
      if(!flag) Modal.info(errorMsg, 1)
      return errorMsg
    }
  }

  // 改变
  onChange = (e, item, list) => {
    if(item.validate) return;
    if(item.type === 'phone'){
      e = e.replace(/\s*/g,"")
    }
    let isValidate = true
    // 如果是必填且没有规则时，将其判断不能为空，如果有规则，则走向规则
    if(item.required && !item.rules){
      isValidate = e.length === 0 ? false : true;
    }
    if(item.rules) isValidate = item.rules(e)
    list.map(ele => {
      item.name === ele.name ? ele.value = e : ''
      if(item.error !== undefined) item.error = isValidate ?  false : true
    });
    this.setState({
      list
    })
  }

  onSubmit = (list) => {
    // 首先判断哪些是必填的
    const res = this.getValidate(list, this.props.form.getFieldsValue());
    if(res.result){
      Modal.info(res.errorMsg, 1)
      return
    }
    this.props.onSubmit ? this.props.onSubmit(this.props.form.getFieldsValue()) : ''
  }

  getValidate = (list, form) => {
    let result = false;
    let errorMsg = '';
    for(let i = list.length - 1; i >= 0; i--){
      if(list[i].method === 'picker' || list[i].method === 'date'){
        if(!form[list[i].valueName]){
          result = true;
          errorMsg = `请选择${list[i].name}`
        }
      }else if((list[i].method === 'input' || !list[i].method) && (list[i].required || list[i].rules)){
        list[i].error = list[i].error === undefined ? true : list[i].error ? true : false
        if(list[i].error){
          result = true;
          errorMsg = this.onError(list[i], true)
        }
      }
    }

    if(result){
      this.setState({
        list
      })
    }

    return {
      result,
      errorMsg
    }
  }

  onReset = () => {
    const FromList = JSON.parse(sessionStorage.getItem('FromList'));
    let list = this.props.list || listTest
    list.map((item,index) => {
      if(item.method === 'picker' || item.method === 'date'){
        this.props.form.resetFields();
      }else if(item.method === 'input' || !item.method){
        item.value = FromList[index].value
        if(item.error !== undefined) item.error = FromList[index].error
      }
    })
    this.setState({
      list
    })
  }

  componentWillUnmount = () => {
    sessionStorage.removeItem('FromList')
  }

  render() {
    const Item = List.Item;
    const Brief = Item.Brief;
    const { list } = this.state
    const { form:{getFieldProps}, left, submit ='提交', reset='重置', hidden = false } = this.props;

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
                  item.method === 'picker' ?
                  <Picker
                    {...getFieldProps(item.valueName,{
                      initialValue: item.value ? item.value : ''
                    })}
                    data={item.data}
                    cols={item.cols ? item.cols : 1}
                    title={item.title ? item.title : ''}
                    extra={item.extra ? item.extra: '请选择'}
                    cascade={item.cascade ? false : true}
                    okText={item.okText ? item.okText: '确定'}
                    dismissText={item.dismissText ? item.dismissText: '确定'}
                  >
                    <Item arrow="horizontal">{item.name}</Item>
                  </Picker>:
                  item.method === 'date' ?
                  <DatePicker
                    {
                      ...getFieldProps(item.valueName, {
                        initialValue: item.value ? item.value : ''
                      })
                    }
                    mode={item.mode ? item.mode : 'date'}
                    title={item.title ? item.title : ''}
                    extra={item.extra ? item.extra: '请选择'}
                    maxDate={item.max ? item.max : false}
                    minDate={item.min ? item.min : false}
                    use12Hours={item.use12Hours ? true : false}
                  >
                    <List.Item arrow="horizontal">{item.name}</List.Item>
                  </DatePicker>:
                  <InputItem
                    {...getFieldProps(item.valueName, {
                      initialValue: item.value ? item.value : '',
                    })}
                    error={item.error ? true : false}
                    onErrorClick={() => this.onError(item)}
                    className={left ? "FromList-Input" : "FromList-Input FromList-Right"}
                    type={item.type ? item.type : 'text'}
                    extra={item.extra ? item.extra : ''}
                    value={item.validate ? item.validate : item.value}
                    onChange={(e)=> Method.Debounce(this.onChange(e, item, list))}
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
        </List>
        <Button onClick={() => {this.onSubmit(list)}}>{submit}</Button>
        {
          hidden ? '' : <Button type='default' onClick={() => {this.onReset(list)}}>{reset}</Button>
        }
      </div>
    )
  }
}

export default Index