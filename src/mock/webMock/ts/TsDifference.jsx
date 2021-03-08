const Index = [
  {
    title: '',
    content: 'TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'TypeScript',
    content: [
      'JavaScript 的超集用于解决大型项目的代码复杂性',
      '可以在编译期间发现并纠正错误',
      '强类型，支持静态和动态类型',
      '最终被编译成 JavaScript 代码，使浏览器可以理解',
      '支持模块、泛型和接口',
      '支持 ES3，ES4，ES5 和 ES6 等',
      '社区的支持仍在增长，而且还不是很大'
    ],
    method: 'content',
    type: 'listAll'
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