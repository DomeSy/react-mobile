/**
 * @module 排序
 */

const BubbleSort1 = arr => {
  const len = arr.length;
  for(let i = 0;i < len; i++){
    for(let j = 0;j < len - 1 - i; j++ ){
      if(arr[i] > arr[j+1]){
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

const BubbleSort = arr => {
  console.time('改进后冒泡排序耗时');
  let i = arr.length-1;
  //初始时,最后位置保持不变
  while ( i> 0) {
    let pos= 0;
    //每趟开始时,⽆记录交换
    for (let j= 0; j< i; j++)
      if (arr[j]> arr[j+1]) {
        pos= j;
        //记录交换的位置
        let tmp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=tmp;
      }
    i= pos; 
    //为下⼀趟排序作准备
  }
  console.timeEnd('改进后冒泡排序耗时'); 
  return arr;
}

/**
 * @module 冒泡排序
 * @param arr 数组
 */ 
const BubbleSort2 = (arr) => { 
  let low = 0; 
  let high= arr.length-1; 
  //设置变量的初始值
  let tmp,j;
  console.time('2.改进后冒泡排序耗时');
  while (low < high) {
    for (j= low; j< high; ++j) 
      //正向冒泡,找到最⼤者 
      if (arr[j]> arr[j+1]) { 
        tmp = arr[j]; 
        arr[j]=arr[j+1];
        arr[j+1]=tmp; 
      } 
    --high; 
    //修改high值, 前移⼀位
    for (j=high; j>low; --j) 
      //反向冒泡,找到最⼩者 
      if (arr[j]<arr[j-1]) { 
        tmp = arr[j]; 
        arr[j]=arr[j-1];
        arr[j-1]=tmp
      } 
      ++low; 
    //修改low值,后移⼀位 
  }
  console.timeEnd('改进后冒泡排序耗时'); 
  return arr; 
}

export {
  BubbleSort
}