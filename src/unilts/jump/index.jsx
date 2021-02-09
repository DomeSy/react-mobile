import { Control } from 'react-keeper';

/**
 * @module 跳转逻辑封装（并获取参数）
 * 
 * @param go 跳转，记录地址栏，一个参数可传字符串(默认跳转首页),没有参数可以直接跳转
 * @param back 回退(默认回退1)
 * @param replace 重定向（与go一样）
 * @param get 获取地址栏参数
 * @param goSrc 跳转外部地址
 */

class Jump{
  static go = (data) => {
    let { url='/', params={} } = data;
    if(typeof data === 'string') url = data;
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

  static replace = (data) => {
    let { url='/', params={} } = data;
    if(typeof data === 'string') url = data;
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

  static goSrc = (url = 'https://www.baidu.com/') => {
    window.location.href = url
  }
} 
export default Jump