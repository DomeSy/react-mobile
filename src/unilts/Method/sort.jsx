/**
 * @module 排序
 */

/**
 * @method 冒泡排序
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

/**
 * @module 希尔排序
 */
const ShellSort = arr => {
  let len = arr.length, temp, gap = 1;
  console.time('希尔排序耗时:');
  while(gap < len/5) { 
    //动态定义间隔序列
    gap =gap*5+1;
  }
  for (gap; gap > 0; gap = Math.floor(gap/5)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      let j = '';
      for (j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = temp;
    }
  }
  console.timeEnd('希尔排序耗时:');
  return arr;
}

export {
  BubbleSort,
  ShellSort
}