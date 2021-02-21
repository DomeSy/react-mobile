const Index = [
  {
    title: 'call做了这些事：',
    content: [
      '将函数设为对象的属性',
      '执⾏&删除这个函数',
      '指定this到函数并传⼊给定参数执⾏函数',
      '如果不传⼊参数，默认指向为 window'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '模拟call',
    content: `
      // 模拟 call bar.mycall(null);
      //实现⼀个call⽅法：
      Function.prototype.myCall = function(context) {
        //此处没有考虑context⾮object情况
        context.fn = this;
        let args = [];
        for (let i = 1, len = arguments.length; i < len; i++) {
          args.push(arguments[i]);
        }
        context.fn(...args);
        let result = context.fn(...args);
        delete context.fn;
        return result;
      };
    `,
    method: 'edit',
    copy: true
  }
]

export default Index