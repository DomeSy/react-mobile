const Index = [
 
  {
    title: 'Boolean 类型',
    content: `
      let isDone: boolean = false;
      // ES5：var isDone = false;
    `,
    method: 'edit'
  },
  {
    title: 'JavaScript',
    content: [
      '一种脚本语言，用于创建动态网页。',
      '作为一种解释型语言，只能在运行时发现错误',
      '弱类型，没有静态类型选项',
      '可以直接在浏览器中使用',
      '不支持模块，泛型或接口',
      '不支持编译其他 ES3，ES4，ES5 或 ES6 功能',
      '大量的社区支持以及大量文档和解决问题的支持'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '安装Ts',
    content: `npm install -g typescript`,
    method: 'edit',
    copy: true 
  },{
    title: '编译',
    content: `
      tsc helloworld.ts
      helloworld.ts => helloworld.js
    `,
    method: 'edit',
    copy: true 
  }
]

export default Index