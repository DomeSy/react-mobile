const Index = [
  {
    title: '',
    content: `有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: `通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: `类型断言有两种形式：`,
    method: 'content',
    type: 'blue'
  },{
    title: '“尖括号” 语法',
    content: `
      let someValue: any = "this is a string";
      let strLength: number = (<string>someValue).length;
    `,
    method: 'edit'
  },{
    title: '',
    content: `any 类型本质上是类型系统的一个逃逸舱。作为开发者，这给了我们很大的自由：TypeScript 允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查。比如：`,
    method: 'content',
    type: 'blue'
  },{
    title: 'as 语法',
    content: `
      let someValue: any = "this is a string";
      let strLength: number = (someValue as string).length;
    `,
    method: 'edit'
  }
]

export default Index