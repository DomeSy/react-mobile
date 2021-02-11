import copy from 'copy-to-clipboard'
import { Modal } from '@unilts';

/**
 * @module 通用方法
 */
class Method{

  /**
   * @module 复制
   * 
   * @param content 复制的内容
   * @param message 提示语
   */
  static copy = (content = '', message='复制成功') => {
    copy(content);
    Modal.info(message)
  }
}
export default Method
