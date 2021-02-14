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
 * 快速排序
 */
const QuickSort = arr => {
  return quick(arr, 0, arr.length - 1)
}

const quick = (array, left, right) => {
  let index;
  if(array.length > 1){
    index = partition(array, left, right)
    if(left < index - 1){
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
  return array;
}

// 分治函数
const partition = (array, left, right) => {
  // ⽤index取中间值⽽⾮splice
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (compare(array[i], pivot) === -1) { 
      i++ 
    }
    while (compare(array[j], pivot) === 1) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++;
      j--;
    }
  }
  return i
}

const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]]
}

const compare = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
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

/**
 * @module 归并排序
 */
const MergeSort = arr => {
  let len = arr.length;
  if(len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2), 
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(MergeSort(left), MergeSort(right));
}

const merge = (left, right) => {
  let result = [];
  console.time('归并排序耗时');
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  console.timeEnd('归并排序耗时');
  return result;
}

export {
  BubbleSort,
  QuickSort,
  ShellSort,
  MergeSort
}