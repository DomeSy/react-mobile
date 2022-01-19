
import { useState } from 'react';
import { Button } from '@/components';
import { Title } from '@/pages/commonPage'
import { Jump, Modal } from '@/utils';

function mockApiRequest() {
  return new Promise((resolve:any) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

const Index = () => {
  const [count, setCount] = useState(0);
  const [detail, setDetail] = useState(Jump.get()?.detail)

  return (
    <div style={{ padding: '6px 12px'}}>
      <Title content={detail.content} h1>{detail.name} {detail.extra && `(${detail.extra})`}</Title>
      <Title>普通按钮</Title>
      <Button>按钮</Button>
      <Title>静态锁</Title>
      <div>点击次数：{count}</div>
      <Button onClick={async () => {
        Modal.info('开始执行', {maskClickable: true})
        await mockApiRequest();
        setCount((v) => v + 1)
        Modal.info('执行结束', {maskClickable: true})
      }}>多次点击（不加入lock）</Button>
       <Button lock onClick={async () => {
        Modal.info('开始执行', {maskClickable: true})
        await mockApiRequest();
        setCount((v) => v + 1)
        Modal.info('执行结束', {maskClickable: true})
      }}>多次点击（加入lock）</Button>
    </div>
  )
}

export default Index;