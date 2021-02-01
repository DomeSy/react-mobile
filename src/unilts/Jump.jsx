import { Control } from 'react-keeper';

/**
 * @module 跳转逻辑封装（并获取参数）
 * 
 *  go: 跳转，记录地址栏，一个参数可传字符串(默认跳转首页)
 *  back: 回退(默认回退1)
 *  replace：重定向（与go一样）
 *  get：获取地址栏参数
 */

class Jump{
  static go = ({url='/', params={}}) => {
    if(typeof params === 'string'){
      Control.go(url, {params})
      return;
    }else{
      Control.go(url, params)
      return;
    }
  }

  static back = (back = -1) => {
    Control.go(Number(back))
  }

  static replace = ({url='/', params={}}) => {
  if(typeof params === 'string'){
      Control.replace(url, {params})
      return;
    }else{
      Control.replace(url, params)
      return;
    }
  }

  static get = () => {
    return Control.state;
  }
} 
export default Jump