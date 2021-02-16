const ArrayTree = [
  {
    title: '',
    content: '触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: [
      '按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次',
      '服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次',
      '还有搜索联想词功能类似'
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
      static Debounce = (fn, delay=1000) => {
        let timer = null;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, args);
          }, delay);
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