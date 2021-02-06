import { Modal } from 'antd-mobile';

/**
 * @module 弹出框
 * 
 * @param alert 普通弹框 
 * @param confirm 确认框
 * 
 * @param data 可为字符串 或 对象，1>字符串时为消息内容， 2>对象为 title 标题，msg为消息内容
 * @param title 标题
 * @param msg 提示内容
 * @param button 确定按钮
 * @param cacel 取消按钮
 * @param fn 确认时的回调
 * @param fn1 取消时的回调
 */
class ModalView{
  static alert = (data, fn=()=>{}) => {
    let { title='提示', msg='提示内容', button='确认' } = data
    if(typeof data === 'string') msg = data
    Modal.alert(title, msg, [
      { text: button, onPress: fn},
    ])
  }

  static confirm = (data, fn=()=>{}, fn1 =()=>{}) => {
    let { title='提示', msg='提示内容', button='确认', cacel='取消' } = data;
    if(typeof data === 'string') msg = data
    Modal.alert(title, msg, [
      { text: cacel, onPress: fn1},
      {
        text: button,
        onPress: fn
      },
    ])
  }
}

export default ModalView