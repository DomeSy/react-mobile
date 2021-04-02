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
 */
const ArrayFlat = () => {

}

export {
  ArrayRepeat,
  ArrayUnique,
  ArrayFlat
}