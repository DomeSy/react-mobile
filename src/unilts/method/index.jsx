import copy from 'copy-to-clipboard'
import { Modal } from '@unilts';
import { ArrayRepeat } from './array'
import { BubbleSort, ShellSort, MergeSort, QuickSort } from './sort'

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

  static ArrayRepeat = ArrayRepeat

  // 排序
  static BubbleSort = BubbleSort
  static QuickSort = QuickSort
  static ShellSort = ShellSort
  static MergeSort = MergeSort
}
export default Method
