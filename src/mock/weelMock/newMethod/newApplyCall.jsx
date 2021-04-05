const Index = [
  {
    title: '',
    content: 'Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '案例',
    content:  `
    const target = { a: 1 };

    const source1 = { b: 2 };
    const source2 = { c: 3 };

    console.log(Object.assign(target, source1, source2))
    // {a: 1, b: 2, c: 3}

    // 等价于下面这种

    const arr =  Object.assign(target, source1, source2);
    console.log(arr)
    // {a: 1, b: 2, c: 3}

    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      '如果有相同的对象会去重，只保留一个',
      ' 可以处理数组，会当做对象处理，也会返回一个数组'
    ],
    method: 'content',
    type: 'list'
  },
]

export default Index