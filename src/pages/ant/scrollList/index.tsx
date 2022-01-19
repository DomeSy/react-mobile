
import { useState, useEffect } from 'react';
import { ScrollList } from '@/components';
import { List } from 'antd-mobile'
import { Title } from '@/pages/commonPage'
import { Jump } from '@/utils';
import { getScrollList } from './services'

const Index = () => {
  const [detail, setDetail] = useState(Jump.get()?.detail)

  useEffect(() => {
  }, [])

  return (
    <div style={{ padding: '6px 12px'}}>
      <Title content={detail.content} h1>{detail.name} {detail.extra && `(${detail.extra})`}</Title>
      <Title>列表懒加载（结合接口）</Title>
      <ScrollList
        onRequest={getScrollList}
        payload={{
          sizeName: 'size',
          sizeNumber: 20
        }}
        childrenNode={(data:any) => {
          return <>
            <div style={{ padding: 12 }}>展示数量/总数量：{data.list.length}/{data.res.all}</div>
            <List>
              {
              data.list.map((item:any, index:any) => (
                <List.Item key={index}>{item.name}</List.Item>
              ))
            }
          </List>
          </>
        }}
      >
      </ScrollList>
    </div>
  )
}

export default Index;