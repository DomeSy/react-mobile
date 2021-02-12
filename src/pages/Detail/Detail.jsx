import React, { Component } from 'react'
import { Method } from '@unilts'
import { EditHight, Title, ContentList } from '@components/Icon'
import './Detail.less'

class Detail extends Component {

  click = () => {
    Method.copy('复制的内容')
  }

  render() {
    // const text = [
    //   {
    //     name: 'param',
    //     value: '作为展示使用'
    //   },
    //   {
    //     name: 'param',
    //     value: '作为展示使用作为展示使用作为展示使用作为展示使用作为展示使用'
    //   },{
    //     name: 'param',
    //     value: '作为展示使用'
    //   }
    // ]

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

    console.log(arr.length)
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
              fid: 'SS
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

    const text3 = '递归'

    const arrTree = (arr) => {
      const res = Method.ArrayTree(arr, 'id', 'fid');
      console.log(res,'123123')
    }

    return (
      <div className="Detail">
        <div onClick={()=>arrTree(arr)}>测试</div>
       <Title>Domesy</Title>
        {/* <ContentList content={text} type='list' /> */}
        <ContentList content={text1} type="content" />

        <Title blue>适用场景</Title>
        <ContentList content={text2} />

        <Title blue>示例</Title>
        <EditHight>{arrTest}</EditHight>

        <Title blue>运行结果</Title>
        <EditHight>{result}</EditHight>

      </div>
    );
  }
}

export default Detail;