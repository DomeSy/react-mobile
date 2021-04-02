const Index = [
  {
    title: '',
    content: '数组进行排序Sort，通过sort进行排序, 主要有两种，一种是普通的数字排序，第二种是特殊排序，即数组第的元素是对象，根据对象的某一个值进行排序',
    method: 'content',
    type: 'blue'
  },
  {
    title: '数字排序',
    content:  `
      const arr = [40,100,1,5,25,10];

      // 升序
      const result = Method.ArraySort(arr)
      console.log(result) 
      // [1, 5, 10, 25, 40, 100]

      // 降序
      const result = Method.ArraySort(arr, false, false)
      console.log(result) 
      // [100, 40, 25, 10, 5, 1]
    `,
    method: 'edit'
  },
  {
    title: '特殊排序',
    content:  `
      const arr = [
        {
          name: '测试1',
          number: 40,
          str: '40',
        },{
          name: '测试2',
          number: 3,
          str: '3',
        },{
          name: '测试3',
          number: 100,
          str: '100',
        },{
          name: '测试4',
          number: 21,
          str: '21',
        },{
          name: '测试5',
          number: 77,
          str: '77',
        },{
          name: '测试6',
          number: 39,
          str: '39',
        },
      ];

      // 根据number进行排序
      // 升序
      const result = Method.ArraySort(arr, 'number')
      //降序
      const result = Method.ArraySort(arr, 'number', false)
      console.log(result)
      // 结果
      [
        {"name":"测试2","number":3,"str":"3"},
        {"name":"测试4","number":21,"str":"21"},
        {"name":"测试6","number":39,"str":"39"},
        {"name":"测试1","number":40,"str":"40"},
        {"name":"测试5","number":77,"str":"77"},
        {"name":"测试3","number":100,"str":"100"}
      ]

      // 根据str进行排序
      const result = Method.ArraySort(arr, 'str')
      // 结果
      [
        {"name":"测试3","number":100,"str":"100"},
        {"name":"测试4","number":21,"str":"21"},
        {"name":"测试2","number":3,"str":"3"},
        {"name":"测试6","number":39,"str":"39"},
        {"name":"测试1","number":40,"str":"40"},
        {"name":"测试5","number":77,"str":"77"}
      ]
      // 这时可以看出，如果按字符串进行排序，他是按照顺序第一个从小到大排序
    `,
    method: 'edit',
  },
  {
    title: '代码',
    content:  `
      const ArraySort = (list = [], name = false, isSort = true) => {
        if(name){
          const reuslt = list.sort((a, b) => {
            if(a[name] > b[name]){
              return isSort ? 1 : -1
            }else if(a[name] < b[name]){
              return isSort ? -1 : 1
            }else{
              return 0
            }
          })
          return reuslt
        }else{
          const result = list.sort((a, b) => isSort ? a - b : b - a)
          return result
        }
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: 'list',
        value: '数组'
      },
      {
        name: 'isSort',
        value: '升序方式 true 升序  false 降序'
      },
      {
        name: 'name',
        value: '以对象中的那个字段进行排序，为false，则走正常的排序'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default Index