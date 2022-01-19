
import { useState } from 'react';
import { QrCode } from '@/components';
import { Title } from '@/pages/commonPage'
import { Jump, Modal } from '@/utils';
import info from '@/images/Info/touxiang.jpeg'

const Index = () => {
  const [count, setCount] = useState(0);
  const [detail, setDetail] = useState(Jump.get()?.detail)

  return (
    <div style={{ padding: '6px 12px'}}>
      <Title content={detail.content} h1>{detail.name} {detail.extra && `(${detail.extra})`}</Title>
      <Title>标准二维码</Title>
      <QrCode src={'http://www.domesy.cn/'}/>
      <Title>其他属性(大小，是否要Margin，背景颜色，二维码颜色，等级)</Title>
      <QrCode size={200} includeMargin fgColor='#a062d4' level='Q' src={'http://www.domesy.cn/'}/>
      <Title>带头像</Title>
      <QrCode src={'http://www.domesy.cn/'} imageSettings={{
        src: info
      }} />
      <Title>带头像(其他属性)</Title>
      <QrCode src={'http://www.domesy.cn/'} imageSettings={{
        height: 50,
        width: 50,
        src: info
      }} />
    </div>
  )
}

export default Index;