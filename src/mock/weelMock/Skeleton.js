const Index = [
  {
    title: '',
    content: '在首次进入页面的时候，由于接口过多，处理数据的速度较长，这时需要一个类似于loading的状态',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: '加载量过多的页面，如首页',
    method: 'content',
  },
  {
    title: '设计思路',
    content: '块状div，通过Animation即可展示',
    method: 'content',
  },
  {
    title: '示例',
    content: 'arr',
    method: 'content',
  },
  {
    title: '代码',
    content:  `
      .Skeleton {
        &-animation{
          background: rgb(234, 234, 234);
          background-image: linear-gradient(90deg,rgba(255, 255, 255, 0.15) 25%, transparent 25%);
          background-size: 20rem 20rem;
          animation: SkeletonAction 1s linear infinite;
        }
      }
      
      @keyframes SkeletonAction {
        from {
          background-position: 0 0 ;
        }
        to {
          background-position: 20rem 0;
        }
      }
    `,
    method: 'edit',
    copy: true
  },
]

export default Index