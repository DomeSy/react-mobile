/**
 * @module 排序
 */

/**
 * @method 冒泡排序
 * @param arr 数组 
 */
const BubbleSort = arr => {
  let i = arr.length-1;
  while ( i > 0) {
    let pos= 0;
    for (let j= 0; j< i; j++)
      if (arr[j]> arr[j+1]) {
        pos= j;
        //记录交换的位置
        let tmp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=tmp;
      }
    i= pos; 
  }
  return arr;
}

export {
  BubbleSort
}