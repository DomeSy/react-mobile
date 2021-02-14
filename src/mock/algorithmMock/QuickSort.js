const QuickSort = [
  {
    title: '',
    content: '通过⼀趟排序将待排记录分隔成独⽴的两部分，其中⼀部分记录的关键字均⽐另⼀部分的关键字 ⼩，则可分别对这两部分记录继续进⾏排序，以达到整个序列有序。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '设计思路',
    content: [
      '从数组中选择中间⼀项作为主元；',
      '创建两个指针，左边⼀个指向数组的第⼀项，右边指向数组最后⼀项。移动左指针直到我们找到⼀个⽐主元⼤的元 素，接着，移动右指针直到找到⼀个⽐主元⼩的元素。然后交换它们，重复这个过程，直到左指针超过了右指针。这个 过程是的⽐主元⼩的值都排在了主元之前，⽽⽐主元⼤的值都排在了主元之后，这⼀步叫划分操作。',
      '接着，算法对划分的⼩数组（较主元⼩的值组成的⼦数组，以及较主元⼤的值组成的⼦数组）重复之前的两个步骤， 直⾄数组以完全排序。'
    ],
    method: 'content',
    type: 'listAll',
  },
  {
    title: '示例',
    content: `
      const arr = [19, 3, 4, 10, 1, 3, 8]
    `,
    method: 'edit',
  },
  {
    title: '运行结果',
    content: `[1, 3, 3, 4, 8, 10, 19]`,
    method: 'edit',
  },
  {
    title: '代码',
    content:  `
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
    `,
    method: 'edit',
    copy: true
  },{
    title: '算法分析',
    content: [
      '最佳情况：T(n) = O(nlogn)',
      '最坏情况：T(n) = O(n2)',
      '平均情况：T(n) = O(nlogn)'
    ],
    method: 'content',
    type: 'listAll',
  }

]

export default QuickSort