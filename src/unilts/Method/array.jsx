/**
 * @module 数组通用方法
 */

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

export {
  ArrayRepeat
}