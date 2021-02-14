const BubbleSort = [
  {
    title: '',
    content: '冒泡排序是十大排序中最基本的一种排序',
    method: 'content',
    type: 'blue'
  },
  {
    title: '设计思路',
    content: [
      '⽐较相邻的元素。如果第⼀个⽐第⼆个⼤，就交换他们两个。',
      '对每⼀对相邻元素作同样的⼯作，从开始第⼀对到结尾的最后⼀对。这步做完后，最后的元素会是最⼤的数。',
      '针对所有的元素重复以上的步骤，除了最后⼀个。',
      '持续每次对越来越少的元素重复上⾯的步骤，直到没有任何⼀对数字需要⽐较。'
    ],
    method: 'content',
    type: 'listAll',
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

export default BubbleSort