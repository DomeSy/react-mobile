const ArrayTree = [
  {
    title: '',
    content: '在工作中常常遇到一种场景，通过接口获得全部数据，而这些数据具有层级关系，如果元素B的id等于元素A的子id，那么B属于A，即A是B的上级',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: '将数组转化为树形数组',
    method: 'content',
  },
  {
    title: '设计思路',
    content: '通过数组遍历，过滤出id等于fid的并进行赋值，之后在通过两数组去重的方式，来获得最终的树形数组',
    method: 'content',
  },
  {
    title: '示例',
    content: `
    [
      {
        name: '司令',
        content: '我是司令，统领全军',
        id: 'SSS',
        fid: '0'
      },
      {
        name: '军长',
        content: '我是军长，除了司令，我最大',
        id: 'SS',
        fid: 'SSS'
      },
      {
        name: '师长1',
        content: '我是师长1，隶属于军长',
        id: 'S1',
        fid: 'SS'
      },
      {
        name: '师长2',
        content: '我是师长2，隶属于军长',
        id: 'S2',
        fid: 'SS'
      },
      {
        name: '炸弹',
        content: '我是炸弹，可轰炸所有人',
        id: 'SSSSS',
        fid: '1'
      },
      {
        name: '旅长1',
        content: '我是旅长1，隶属于师长1',
        id: 'A',
        fid: 'S1'
      },
      {
        name: '旅长2',
        content: '我是旅长2，隶属于师长1',
        id: 'A',
        fid: 'S1'
      },
      {
        name: '旅长3',
        content: '我是旅长3，隶属于师长1',
        id: 'A',
        fid: 'S1'
      }
    ]
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '运行结果',
    content:  `[
      {
       name: '司令',
       content: '我是司令，统领全军',
       id: 'SSS',
       fid: '0',
       children: [
         {
           name: '师长1',
           content: '我是师长1，隶属于军长',
           id: 'S1',
           fid: 'SS,
           children: [
             {
               name: '旅长1',
               content: '我是旅长1，隶属于师长1',
               id: 'A',
               fid: 'S1'
             },
             {
               name: '旅长2',
               content: '我是旅长2，隶属于师长1',
               id: 'A',
               fid: 'S1'
             },
             {
               name: '旅长3',
               content: '我是旅长3，隶属于师长1',
               id: 'A',
               fid: 'S1'
             }
           ]
         },
         {
           name: '师长2',
           content: '我是师长2，隶属于军长',
           id: 'S1',
           fid: 'SS'
         }
       ]
      },
      {
       name: '炸弹',
       content: '我是炸弹，可轰炸所有人',
       id: 'SSSSS',
       fid: '1'
      }
    ]`,
    method: 'edit',
  },
  {
    title: '代码',
    content:  `
    
      static ArrayTree = (allList, id, fid, children = 'children') => {
        let deeplist = JSON.parse(JSON.stringify(allList));
        let filterArr = []
        const tree = deeplist.map( (parent) => {
          let item = deeplist.filter( (child) => parent[id] == child[fid]);
          if (item.length > 0) {
            parent[children] = item;
            filterArr = [...filterArr, ...item]; 
          }
          return parent;
        });
    
        const result = Method.ArrayRepeat(tree, filterArr, id)
        return result;
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: 'arrList',
        value: '数组集合'
      },{
        name: 'id',
        value: '子id'
      },{
        name: 'fid',
        value: '父id'
      },{
        name: 'children',
        value: '将子id放入fid的名字，默认children'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '',
    content: '注：ArrayRepeat为两数组过滤',
    method: 'content',
    type: 'red'
  }
]

export default ArrayTree