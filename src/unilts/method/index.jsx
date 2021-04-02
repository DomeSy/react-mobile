import copy from 'copy-to-clipboard'
import { Modal } from '@unilts';
import { ArrayUnique, ArrayRepeat, ArrayFlat } from './array'
import { BubbleSort, ShellSort, MergeSort, QuickSort } from './sort'
import { validateIdCard, validatePhone, validateEmail, validateUpwd, validateCardCode } from './validate'
import { getDate, getDateTime } from './date'

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

  /**
   * @module 树形数组
   * 
   * @param arrList 数组集合
   * @param id 子id
   * @param fid 父id
   * @param children 将子id放入fid的名字，默认children
   */ 
  static ArrayTree = (allList, id, fid, children = 'children') => {
    let deeplist = JSON.parse(JSON.stringify(allList));
    let filterArr = []
    const tree = deeplist.map( (parent) => {
      let item = deeplist.filter( (child) => parent[id] == child[fid]);
      if (item.length > 0) {
        parent[children] = item;
        filterArr = [...filterArr, ...item]; 
      }
      return parent;
    });

    const result = Method.ArrayRepeat(tree, filterArr, id)
    return result;
  }

  /**
   * @module 获取地址栏参数
   * 
   * @param id 获取的id名
   * @param path 路径
   */
  static getUrlParam = (id, path) => {
    let url = "";
    if (path) {
      url = path
    } else {
      if(location.href.indexOf('#/') !== -1){
        url = location.href.replace('#/', '')
      } else{
        url = location.href
      }
    }
    url = url + "";
    let regstr = "/(\\?|\\&)" + id + "=([^\\&]+)/";
    let reg = eval(regstr); //eval可以将 regstr字符串转换为 正则表达式
    let result = url.match(reg); //匹配的结果是：result[0]=?sid=22 result[1]=sid result[2]=22。所以下面我们返回result[2]
    if (result && result[2]) {
      return result[2];
    }
  }

  /**
   * @module 防抖
   * 
   * @param fn 包裹的函数
   * @param delay 时长，默认1000
   */
  static Debounce = (fn, delay=1000) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  /**
   * 节流
   * 
   * @param fn 包裹的函数
   * @param delay 时长，默认1000
   */
  static Throttle = (fn, delay = 1000) => {
    let flag = true;
    return (...args) => {
      if (!flag) return;
      flag = false;
      setTimeout(() => {
        fn.apply(this, args);
        flag = true;
      },
      delay);
    };
  };

  // 数组
  static ArrayRepeat = ArrayRepeat
  static ArrayUnique = ArrayUnique
  static ArrayFlat = ArrayFlat

  // 排序
  static BubbleSort = BubbleSort
  static QuickSort = QuickSort
  static ShellSort = ShellSort
  static MergeSort = MergeSort

  // 日期
  static getDate = getDate
  static getDateTime = getDateTime

  //验证
  static validateIdCard = validateIdCard
  static validatePhone = validatePhone
  static validateEmail = validateEmail
  static validateUpwd = validateUpwd
  static validateCardCode = validateCardCode
}
export default Method
