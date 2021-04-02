const Index = [
  {
    title: '',
    content: 'concat() 方法用于连接两个或多个数组。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '',
    content: '该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '案例',
    content:  `
      const arr = new Array(3)
      arr[0] = "George"
      arr[1] = "John"
      arr[2] = "Thomas"
      
      const arr2 = new Array(3)
      arr2[0] = "James"
      arr2[1] = "Adrew"
      arr2[2] = "Martin"
      
      const arr3 = new Array(2)
      arr3[0] = "William"
      arr3[1] = "Franklin"

      const result = arr.concat(arr2,arr3)
      console.log(result)
      // George,John,Thomas,James,Adrew,Martin,William,Franklin
    `,
    method: 'edit',
    copy: true
  }
]

export default Index