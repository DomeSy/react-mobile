/**
 * @module 数组通用方法
 */

/**
 * @module 数组去重
 * 
 * @param {*} arr 数组 
 */
const ArrayUnique = (arr = []) => {
  let obj = {};
  return arr.filter(function(item, index, arr){
      return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
} 

/**
 * @module 两数组去重
 * 
 * @param a 数组a （总数组） 
 * @param b 数组b （去重的数组）
 * @param id 去重的元素
 */
const ArrayRepeat = (a, b, id) => {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j][id] == b[i][id]) {
        a.splice(j, 1);
        j = j - 1;
      }
    }
  }
  return a;
}

/**
 * @module 数组扁平化
 * 
 * @param arr 数组
 */
const ArrayFlat = (arr = []) => {
  return arr.flat(Infinity)
}

/**
 * @module 数组排序
 * 
 * @param list 数组
 * @param isSort 升序方式 true 升序  false 降序
 * @param name 以对象中的那个字段进行排序，为false，则走正常的排序
 */
const ArraySort = (list = [], name = false, isSort = true) => {
  if(name){
    const reuslt = list.sort((a, b) => {
      if(a[name] > b[name]){
        return isSort ? 1 : -1
      }else if(a[name] < b[name]){
        return isSort ? -1 : 1
      }else{
        return 0
      }
    })
    return reuslt
  }else{
    const result = list.sort((a, b) => isSort ? a - b : b - a)
    return result
  }
}

export {
  ArrayRepeat,
  ArrayUnique,
  ArrayFlat,
  ArraySort
}