import React, { Component } from 'react'
import { Method } from '@unilts'
import { EditHight, Title, ContentList } from '@components/Icon'
import './Detail.less'

class Detail extends Component {

  click = () => {
    Method.copy('复制的内容')
  }

  render() {
    const text = [
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
    ]

    const text1 = '在工作中常常遇到一种场景，通过接口获得全部数据，而这些数据具有层级关系，如果元素B的id等于元素A的子id，那么B属于A，即A是B的上级。'

    const text2 = '将数组转化为树形数组'

    const arr = [
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

    const arrTest = `
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
    `
    const result = `
       [
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
       ]
    `
    
    const result1 = `
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
    `

    const text3 = '通过数组遍历，过滤出id等于fid的并进行赋值，之后在通过两数组去重的方式，来获得最终的树形数组'
    const text4 = '注：ArrayRepeat为两数组过滤'

    const arrTree = (arr) => {
      const res = Method.ArrayTree(arr, 'id', 'fid');
    }

    return (
      <div className="Detail">
        <div onClick={()=>arrTree(arr)}>测试</div>
       <Title>Domesy</Title>
        <ContentList content={text1} type="content" />

        <Title blue>适用场景</Title>
        <ContentList content={text2} />
        
        <Title blue>设计思路</Title>
        <ContentList content={text3} />

        <Title blue>示例</Title>
        <EditHight copy>{arrTest}</EditHight>

        <Title blue>运行结果</Title>
        <EditHight>{result}</EditHight>

        <Title blue>代码</Title>
        <EditHight copy>{result1}</EditHight>

        <ContentList content={text} type='list' />
        <ContentList content={text4} type='note' />
      </div>
    );
  }
}

export default Detail;