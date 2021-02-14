const BubbleSort = [
  {
    title: '',
    content: '冒泡排序是十大排序中最基本的一种排序',
    method: 'content',
    type: 'blue'
  },
  {
    title: '设计思路',
    content: [
      '⽐较相邻的元素。如果第⼀个⽐第⼆个⼤，就交换他们两个。',
      '对每⼀对相邻元素作同样的⼯作，从开始第⼀对到结尾的最后⼀对。这步做完后，最后的元素会是最⼤的数。',
      '针对所有的元素重复以上的步骤，除了最后⼀个。',
      '持续每次对越来越少的元素重复上⾯的步骤，直到没有任何⼀对数字需要⽐较。'
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
      const BubbleSort1 = arr => {
        console.time('初始耗时');
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
        console.timeEnd('初始耗时'); 
        return arr
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '初始耗时',
    content:  `
      0.01318359375 ms
    `,
    method: 'edit',
  },
  {
    title: '优化思路',
    content: '设置⼀标志性变量pos,⽤于记录每趟排序中最后⼀次进⾏交换的位置。由于pos位置之后的记录均已交换到位,故 在进⾏下⼀趟排序时只要扫描到pos位置即可。',
    method: 'content',
  },
  {
    title: '最终代码',
    content:  `
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
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '改进后冒泡排序耗时',
    content:  `
      0.010986328125 ms
    `,
    method: 'edit',
  },

]

export default BubbleSort