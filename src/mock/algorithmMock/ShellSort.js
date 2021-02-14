const ShellSort = [
  {
    title: '',
    content: '1959年Shell发明； 第⼀个突破O(n^2)的排序算法；是简单插⼊排序的改进版；它与插⼊排序的不同之处在于， 它会优先⽐较距离较远的元素。希尔排序⼜叫缩⼩增量排序',
    method: 'content',
    type: 'blue'
  },
  {
    title: '设计思路',
    content: [
      '先将整个待排序的记录序列分割成为若⼲⼦序列分别进⾏直接插⼊排序，具体算法描述：',
      '选择⼀个增量序列t1，t2，…，tk，其中ti>tj，tk=1；',
      '按增量序列个数k，对序列进⾏k 趟排序；',
      '每趟排序，根据对应的增量ti，将待排序列分割成若⼲⻓度为m 的⼦序列，分别对各⼦表进⾏直接插⼊排序。仅增 量因⼦为1 时，整个序列作为⼀个表来处理，表⻓度即为整个序列的⻓度。'
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
            for (let j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
              arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
          }
        }
        console.timeEnd('希尔排序耗时:');
        return arr;
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '初始耗时',
    content:  `
      0.010009765625 ms
    `,
    method: 'edit',
  },{
    title: '算法分析',
    content: [
      '最佳情况：T(n) = O(nlog2 n)',
      '最坏情况：T(n) = O(nlog2 n)',
      '平均情况：T(n) =O(nlog n)'
    ],
    method: 'content',
    type: 'listAll',
  }
]

export default ShellSort