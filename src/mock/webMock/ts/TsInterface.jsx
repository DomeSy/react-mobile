const Index = [
  {
    title: '',
    content: `在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现。`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: `TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。`,
    method: 'content',
    type: 'blue'
  },{
    title: '对象的形状',
    content: `
      interface Person {
        name: string;
        age: number;
      }
      
      let Semlinker: Person = {
        name: "Semlinker",
        age: 33,
      };
    `,
    method: 'edit'
  },{
    title: '可选 | 只读属性',
    content: `
      interface Person {
        readonly name: string;
        age?: number;
      }
    `,
    method: 'edit'
  },{
    title: '',
    content: `只读属性用于限制只能在对象刚刚创建的时候修改其值。`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: `此外 TypeScript 还提供了 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: `
      let a: number[] = [1, 2, 3, 4];
      let ro: ReadonlyArray<number> = a;
      ro[0] = 12; // error!
      ro.push(5); // error!
      ro.length = 100; // error!
      a = ro; // error!
    `,
    method: 'edit'
  }
]

export default Index