import { Modal, Toast } from 'antd-mobile-v2';

/**
 * @module 弹出框、轻提示
 * 
 * @param alert 普通弹框 
 * @param confirm 确认框
 * @param info 轻提示
 * @param success 成功
 * @param fail 失败
 * @param loading 加载框
 * @param hide 取消
 */
class ModalView{
  /**
   * @param data 可为字符串 或 对象，1>字符串时为消息内容， 2>对象为 title 标题，msg为消息内容
   * @param title 标题
   * @param msg 提示内容
   * @param button 确定按钮
   * @param fn 确认时的回调
   */
  static alert = (data, fn=()=>{}) => {
    let { title='提示', msg='提示内容', button='确认' } = data
    if(typeof data === 'string') msg = data
    Modal.alert(title, msg, [
      { text: button, onPress: fn},
    ])
  }

  /**
   * @param cacel 取消按钮
   * @param fn1 取消时的回调
   */
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

  /**
   * @param content 加载的文字
   * @param duration 显示的时长，默认2
   * @param mask 是否可穿透，默认不可穿透
   */
  static info = (content='提示语', duration=2, mask=true) => {
    Toast.info(content, duration, null, mask);
  }

  static success = (content='success !!!', duration=2, mask=true) => {
    Toast.success(content, duration, null, mask);
  }

  static fail = (content='fail !!!', duration=2, mask=true) => {
    Toast.fail(content, duration, null, mask);
  }

  static loading = (content='加载中...', duration=0, mask=true) => {
    Toast.loading(content, duration, null, mask);
  }

  static hide = () => {
    Toast.hide()
  }
}

export default ModalView