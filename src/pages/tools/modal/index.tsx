
import React, { useState } from 'react';
import { Button } from '@/components';
import { Title } from '@/pages/commonPage'
import { Jump, Modal } from '@/utils';
import './index.less'

function mockApiRequest() {
  return new Promise((resolve:any) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

const Index:React.FC<any> = () => {
  const [detail, setDetail] = useState(Jump.get()?.detail)

  return (
    <div className='ToolsModal'>
      <Title content={detail.content} h1>{detail.name} {detail.extra && `(${detail.extra})`}</Title>
      <Title>轻提示（Modal.info）</Title>
      <div className='ToolsModal-div'>
        <Button block={false} onClick={() => {Modal.info('我是普通提示')}}>普通提示</Button>
        <Button block={false} onClick={() => {Modal.success('成功')}}>成功</Button>
        <Button block={false} onClick={() => {Modal.fail('失败')}}>失败</Button>
        <Button block={false} onClick={() => {Modal.loading('加载中', {maskClickable: true})}}>加载</Button>
        <Button block={false} onClick={() => {Modal.hide()}}>手动清除</Button>
      </div>
      <Title>弹框（Modal.alert）</Title>
      <div className='ToolsModal-div'>
        <Button block={false} onClick={() => {Modal.alert('莫愁前路无知己，天下谁人不识君', () => {Modal.info('点击了确认')})}}>基础弹框</Button>
        <Button block={false} onClick={() => {Modal.alert('莫愁前路无知己，天下谁人不识君',async () => {await mockApiRequest();Modal.info('点击了确认')})}}>异步弹框</Button>
        <Button block={false} onClick={() => {Modal.alert({content: '莫愁前路无知己，天下谁人不识君', title: 'Domesy', button: '给个Star~', closeOnMaskClick: true}, () => {Modal.info('点击了确认')})}}>其余属性（遮罩层关闭）</Button>
      </div>
      <Title>确认框（Modal.confirm）</Title>
      <div className='ToolsModal-div'>
        <Button block={false} onClick={() => {Modal.confirm('莫愁前路无知己，天下谁人不识君', () => {Modal.info('点击了确认')})}}>基础确认框</Button>
        <Button block={false} onClick={() => {Modal.confirm('莫愁前路无知己，天下谁人不识君',async () => {await mockApiRequest();Modal.info('点击了确认')})}}>异步确认框</Button>
        <Button block={false} onClick={() => {Modal.confirm({content: '莫愁前路无知己，天下谁人不识君', title: 'Domesy', button: '给个Star~', cancel: '我是取消',  closeOnMaskClick: true}, () => {Modal.info('点击了确认')}, () => {Modal.info('点击了取消')})}}>其余属性（遮罩层关闭）</Button>
      </div>
    </div>
  )
}

export default Index;
