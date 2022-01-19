
import { useState } from 'react';
import { Drag, Button } from '@/components';
import { Title} from '@/pages/commonPage'
import { Jump, Modal } from '@/utils';
import { Input, List } from 'antd-mobile'
import { dragTest1 } from './test'
import img from './delete.png'


const Index = () => {
  const [count, setCount] = useState(0);
  const [detail, setDetail] = useState(Jump.get()?.detail)
  const [data, setData] = useState<any>('')
  const [list, setList] = useState<any>(dragTest1)

  return (
    <div style={{ padding: '6px 12px'}}>
      <Title content={detail.content} h1>{detail.name} {detail.extra && `(${detail.extra})`}</Title>
      <Title>基本操作123</Title>
      <Drag
        list={dragTest1}
        id="value"
        render={(data) => {
          return <div style={{margin: 3, fontSize: 13, border: '1px dashed #cccccc', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>{data.data}</div>
        }}
        onChange={(list) => {
          Modal.info('数据置换成功，打卡控制台看看吧~')
          console.log('改变后的数据:', list)
        }}
      />
      <Title>结合使用增加删除操作</Title>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Input style={{width: 200}} placeholder='请输入' onChange={(e) => setData(e)} value={data} />
        <Button block={false} onClick={() => {
          if(data){
            const test:any = [ ...list, { data, value: Math.random(), }]
            setList(test)
            setData('')
          }
        }}>增加</Button>
      </div>
      <Drag
        list={list}
        id="value"
        render={(data) => {
          return <div style={{margin: 3, fontSize: 13, position:'relative',  border: '1px dashed #3b9de9', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>
            <img
              src={img}
              style={{position: 'absolute', top: -1, right: -1, width: 16, height: 16, cursor: 'pointer'}}
              onClick={() => {
                const test = list.filter((item:any) => item.id !== data.id)
                setList(test)
              }}
            />
            {data.data}
          </div>
        }}
        onChange={(list) => {
          Modal.info('数据置换成功，打卡控制台看看吧~')
          console.log('改变后的数据:', list)
          setList([...list])
        }}
      />
    </div>
  )
}

export default Index;