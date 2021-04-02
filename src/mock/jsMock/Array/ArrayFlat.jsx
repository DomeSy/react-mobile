const Index = [
  {
    title: '',
    content: '数组扁平化，意思就是将多维数组转化为一位数组',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'flat',
    content: 'flat是ES6新增的方法，它会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。',
    method: 'content',
  },
  {
    title: '',
    content:  `
      const ArrayFlat = (arr = []) => {
        return arr.flat(Infinity)
      }

      const arr = [1, 2, 3, [4, 5, [6], [7,8], [9,[10,11]]]]
      const result = Method.ArrayFlat(arr)
      
      console.log(result)
      //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    `,
    method: 'edit'
  },{
    title: '',
    content: 'Infinity是无限的意思，也就是没有上限',
    method: 'content',
    type: 'red'
  },
  {
    title: '正则',
    content: '通过转化为字符串，通过正则来将[]去掉，最后在首和尾加上[]，转化为数组即可',
    method: 'content',
  },
  {
    title: '递归',
    content: '就是通过递归的模式进行遍历，其本质就是一个数组，只不过根据数组的类型来进行扁平化处理，中间的就相当于类型是数组，然后依次展开就可以了',
    method: 'content',
  },
  {
    title: '扩展运算符',
    content: '大概思路更递归一样，通过concat即可',
    method: 'content',
  },
  {
    title: '',
    content:  `
      const ArrayFlat = (arr = []) => {
        while (arr.some(Array.isArray)) {
          arr = [].concat(...arr);
        }
        return arr
      }

      const arr = [1, 2, 3, [4, 5, [6], [7,8], [9,[10,11]]]]
      const result = Method.ArrayFlat(arr)
      
      console.log(result)
      //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    `,
    method: 'edit'
  }
]

export default Index