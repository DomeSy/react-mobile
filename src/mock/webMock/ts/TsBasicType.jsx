const Index = [
  {
    title: 'Boolean 类型',
    content: `
      let isDone: boolean = false;
      // ES5：var isDone = false;
    `,
    method: 'edit'
  },{
    title: 'Number 类型',
    content: `
      let count: number = 10;
      // ES5：var count = 10;
    `,
    method: 'edit'
  },{
    title: 'String 类型',
    content: `
      let name: string = "Semliker";
      // ES5：var name = 'Semlinker';
    `,
    method: 'edit'
  },{
    title: 'Any 类型',
    content: `在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型（也被称作全局超级类型）。`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: `
      let notSure: any = 666;
      notSure = "Semlinker";
      notSure = false;
    `,
    method: 'edit'
  },{
    title: '',
    content: `any 类型本质上是类型系统的一个逃逸舱。作为开发者，这给了我们很大的自由：TypeScript 允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查。比如：`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: `
      let value: any;

      value.foo.bar; // OK
      value.trim(); // OK
      value(); // OK
      new value(); // OK
      value[0][1]; // OK
    `,
    method: 'edit'
  },{
    title: 'Null 和 Undefined 类型',
    content: `TypeScript 里，undefined 和 null 两者有各自的类型分别为 undefined 和 null。`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: `
      let u: undefined = undefined;
      let n: null = null;
    `,
    method: 'edit'
  },{
    title: '',
    content: `默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。然而，如果你指定了--strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自的类型。`,
    method: 'content',
    type: 'blue'
  },{
    title: 'Enum 类型',
    content: `使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。`,
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: [
      '数字枚举'
    ],
    method: 'listAll'
  },
  {
    title: '',
    content: `
      enum Direction {
        NORTH,
        SOUTH,
        EAST,
        WEST,
      }
      
      let dir: Direction = Direction.NORTH;
    `,
    method: 'edit'
  },{
    title: '',
    content: `默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长。换句话说，Direction.SOUTH 的值为 1，Direction.EAST 的值为 2，Direction.WEST 的值为 3。上面的枚举示例代码经过编译后会生成以下代码：`,
    method: 'content'
  },{
    title: '',
    content: `
      "use strict";
      var Direction;
      (function (Direction) {
        Direction[(Direction["NORTH"] = 0)] = "NORTH";
        Direction[(Direction["SOUTH"] = 1)] = "SOUTH";
        Direction[(Direction["EAST"] = 2)] = "EAST";
        Direction[(Direction["WEST"] = 3)] = "WEST";
      })(Direction || (Direction = {}));
      var dir = Direction.NORTH;
    `,
    method: 'edit'
  },{
    title: '',
    content: `当然我们也可以设置 NORTH 的初始值，比如：`,
    method: 'content'
  },{
    title: '',
    content: `
      enum Direction {
        NORTH = 3,
        SOUTH,
        EAST,
        WEST,
      }
    `,
    method: 'edit'
  },{
    title: '',
    content: [
      '字符串枚举'
    ],
    method: 'listAll'
  },{
    title: '',
    content: `在 TypeScript 2.4 版本，允许我们使用字符串枚举。在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。`,
    method: 'content'
  },{
    title: '',
    content: `
      enum Direction {
        NORTH = "NORTH",
        SOUTH = "SOUTH",
        EAST = "EAST",
        WEST = "WEST",
      }
    `,
    method: 'edit'
  },{
    title: '',
    content: `以上代码对于的 ES5 代码如下：`,
    method: 'content'
  },{
    title: '',
    content: `
      "use strict";
      var Direction;
      (function (Direction) {
          Direction["NORTH"] = "NORTH";
          Direction["SOUTH"] = "SOUTH";
          Direction["EAST"] = "EAST";
          Direction["WEST"] = "WEST";
      })(Direction || (Direction = {}));
    `,
    method: 'edit'
  },{
    title: '',
    content: [
      '异构枚举'
    ],
    method: 'listAll'
  },{
    title: '',
    content: `异构枚举的成员值是数字和字符串的混合：`,
    method: 'content'
  },{
    title: '',
    content: `
      enum Enum {
        A,
        B,
        C = "C",
        D = "D",
        E = 8,
        F,
      }
    `,
    method: 'edit'
  },{
    title: '',
    content: `以上代码对于的 ES5 代码如下：`,
    method: 'content'
  },{
    title: '',
    content: `
      "use strict";
      var Enum;
      (function (Enum) {
          Enum[Enum["A"] = 0] = "A";
          Enum[Enum["B"] = 1] = "B";
          Enum["C"] = "C";
          Enum["D"] = "D";
          Enum[Enum["E"] = 8] = "E";
          Enum[Enum["F"] = 9] = "F";
      })(Enum || (Enum = {}));
    `,
    method: 'edit'
  },{
    title: '',
    content: `通过观察上述生成的 ES5 代码，我们可以发现数字枚举相对字符串枚举多了 “反向映射”：`,
    method: 'content'
  },{
    title: '',
    content: `
      console.log(Enum.A) //输出：0
      console.log(Enum[0]) // 输出：A
    `,
    method: 'edit'
  }
]

export default Index