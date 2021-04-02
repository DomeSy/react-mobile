const Index = [
  {
    title: '',
    content: '数组合并去重，实际而言没啥用，原因只能通过数组来弄',
    method: 'content',
    type: 'blue'
  },{
    title: '思路',
    content: '通过concat进行连接然后通过new Set去排序，然后Array.from去转化为数组',
    method: 'content',
    type: 'blue'
  },
  {
    title: '代码',
    content:  `
      const TwoArrayUnique = (a= [], b = []) => {
        const arr = a.concat(b)
        const result = new Set(arr)
        return Array.from(result)
      }

      let arr1=[1,2,3]
      let arr2=[2,3,4]

      const result = Method.TwoArrayUnique(arr1, arr2)
      console.log(result)
      //[1, 2, 3, 4]
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: '此处无法拥有太多价值，所以不需要来做成方法，只是展示',
    method: 'content',
    type: 'red'
  }
]

export default Index