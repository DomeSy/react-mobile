const Secret = [
  {
    title: '',
    content: '前端加解密',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: 'md5',
    method: 'content',
  },
  {
    title: 'md5',
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

export default Secret