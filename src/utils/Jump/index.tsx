import { Control, CacheLink } from 'react-keeper';
import React from 'react'
/**
 * @module 跳转逻辑封装（并获取参数）
 * 
 * @param go 跳转，记录地址栏，一个参数可传字符串(默认跳转首页),没有参数可以直接跳转
 * @param cache 页面跳转（缓存当前页面，即跳转回来的页面有缓存）
 * @param back 回退(默认回退1)
 * @param replace 重定向（与go一样）
 * @param get 获取地址栏参数
 * @param href 跳转外部地址 
 * @param title 设置标题
 * 
 * @param url 跳转的地址
 * @param params 跳转时所带的参数
 * 
 * @cache
 * @param ele 节点内容(可为页面节点，但所包含的组件不能有a标签)
 * @param params 这里的params必须为对象
 */

class Jump{
  static go = (url:string='/', params:any = {}) => {
    Control.go(url, params)
    return;
  }

  static back = (back = -1) => {
    Control.go(Number(back))
  }

  static cache = (ele:React.ReactNode ,url='/', params = {}) => {
    //@ts-ignore
    return <CacheLink to={url} state={params}>{ele}</CacheLink>
  }

  static replace = (url='/', params = {}) => {
    Control.replace(url, params)
    return;
  }

  static get = () => {
    if(Control.state === null){
      Jump.replace()
    }
    return Control.state;
  }

  static href = (url = 'https://www.baidu.com/', params={}) => {
    let str = ''
    if(Object.keys(params).length != 0){
      for(let name in params){
        //@ts-ignore
        str += `${name}=${params[name]}&`
      }
    }
    window.location.href = str.length === 0 ? url : `${url}?${str.substring(0, str.length-1)}`
  }

  static title = (title = '') => {
    document.title = title;
    return;
  }
} 
export default Jump