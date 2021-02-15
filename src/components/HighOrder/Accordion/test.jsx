const list = [
  {
    name: '基本使用',
    children: [
      {
        name: 'message',
        message: '暂无内容'
      },
      {
        name: '外链',
        src: 'https://www.baidu.com/',
      },
      {
        name: '本地',
        path: '/',
      },
    ]
  },
  {
    name: '使用+参数',
    children: [
      {
        name: '外链+参数',
        src: 'https://www.baidu.com/',
        params: {
          text: '1'
        }
      },
      {
        name: '本地+参数',
        path: '/',
        params: {
          text: '1'
        }
      },
      {
        name: '下级2',
      }
    ]
  },
  {
    name: '标题3',
  }
]

export default list