const list = [
  {
    name: '标题1',
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
    name: '标题2',
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
    children: [
      {
        name: '下级1',
      },
      {
        name: '下级2',
      },
      {
        name: '下级2',
      }
    ]
  },
  {
    name: '标题4',
  }
]

export default list