const MergeSort = [
  {
    title: '',
    content: '归并排序是建⽴在归并操作上的⼀种有效的排序算法。该算法是采⽤分治法（Divide and Conquer）的⼀个⾮常 典型的应⽤。归并排序是⼀种稳定的排序⽅法。将已有序的⼦序列合并，得到完全有序的序列；即先使每个⼦序 列有序，再使⼦序列段间有序。若将两个有序表合并成⼀个有序表，称为2-路归并。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '设计思路',
    content: [
      '把⻓度为n的输⼊序列分成两个⻓度为n/2的⼦序列；',
      '对这两个⼦序列分别采⽤归并排序；',
      '将两个排序好的⼦序列合并成⼀个最终的排序序列。',
      '递归思想'
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
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '初始耗时',
    content:  `
      0.00390625 ms
      0.005126953125 ms
      0.004150390625 ms
      0.00390625 ms
      0.00390625 ms
      最终耗时 0.013916015625 ms
    `,
    method: 'edit',
  },{
    title: '算法分析',
    content: [
      '最佳情况：T(n) = O(n)',
      '最坏情况：T(n) = O(nlogn)',
      '平均情况：T(n) = O(nlogn)'
    ],
    method: 'content',
    type: 'listAll',
  }
]

export default MergeSort