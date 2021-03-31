const Index = [
  {
    title: '',
    content: '数组去重，实际中基本不会遇到，一般而言是面试的时候才会用到',
    method: 'content',
    type: 'blue'
  },
  {
    title: '利用ES6 Set去重（ES6中最常用）',
    content:  `
      const ArrayUnique = (arr = []) => {
        return Array.from(new Set(arr))
      }


      const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
      Method.ArrayUnique(arr)
      // [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '优点',
        value: ''
      },
      {
        name: '缺点'
      }
    ],
    method: 'list'
  },

]

export default Index