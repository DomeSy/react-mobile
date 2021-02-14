const ArrayTree = [
  {
    title: '',
    content: '规定在⼀个单位时间内，只能触发⼀次函数。如果这个单位时间内触发多次函数，只有⼀次⽣效。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: [
      '拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动',
      '缩放场景：监控浏览器resize',
      '动画场景：避免短时间内多次触发动画引起性能问题'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '设计思路',
    content: '定时器',
    method: 'content',
  },
  {
    title: '代码',
    content:  `
      static Throttle = (fn, delay = 1000) => {
        let flag = true;
        return (...args) => {
          if (!flag) return;
          flag = false;
          setTimeout(() => {
            fn.apply(this, args);
            flag = true;
          },
          delay);
        };
      };
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: 'fn',
        value: '包裹的函数'
      },{
        name: 'delay',
        value: '时长，默认1000'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '',
    content: '注：防抖和节流都是为了防止出现延迟，假死或卡顿的现象，不同的是，防抖是合并多次执行最后一次，节流是在一定时间内，只执行一遍',
    method: 'content',
    type: 'red'
  }
]

export default ArrayTree