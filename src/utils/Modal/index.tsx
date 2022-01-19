import { Dialog, Toast } from 'antd-mobile'
                                                             
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
   * @param content 提示内容
   * @param button 确定按钮
   * @param fn 确认时的回调
   * @param props 其余属性
   */
  static alert = (data:any, fn=()=>{}) => {
    let { title = '提示', content, button = '确认', ...props } = data
    if(typeof data === 'string') content = data
    return Dialog.alert({
      title,
      content,
      confirmText: button,
      onConfirm: fn,
      ...props
    })
  }

  /**
   * @param cancel 取消按钮
   * @param fn1 取消时的回调
   */
  static confirm = (data:any, fn=()=>{}, fn1 =()=>{}) => {
    let { title = '提示', content, button = '确认', cancel = '取消', ...props } = data
    if(typeof data === 'string') content = data
    return Dialog.confirm({
      title,
      content,
      confirmText: button,
      cancelText: cancel,
      onConfirm: fn,
      onCancel: fn1,
      ...props
    })
  }

  /**
   * 
   * @msg  第一个参数内容 第二个参数其余属性
   * @param content 加载的文字
   * @param duration 显示的时长，默认2s
   * @param maskClickable 是否可穿透，默认不可穿透
   */
  static info = (content='提示语', props?:any) => {
    Toast.show({content, duration: 2000, maskClickable: false , ...props})
  }

  static success = (content='提示语', props?:any) => {
    return Toast.show({ icon: 'success', content, duration: 2000, maskClickable: false , ...props})
  }

  static fail = (content='提示语', props?:any) => {
    return Toast.show({ icon: 'fail', content, duration: 2000, maskClickable: false , ...props})
  }

  static loading = (content='提示语', props?:any) => {
    return Toast.show({ icon: 'loading', content, duration: 0, maskClickable: false , ...props})
  }

  static hide = () => {
    return Toast.clear()
  }
}

export default ModalView