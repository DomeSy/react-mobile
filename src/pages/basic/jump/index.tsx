
import React, { useState, useEffect } from 'react';
import { Button } from '@/components';
import { Title } from '@/pages/commonPage'
import { Jump, Modal } from '@/utils';

const Index:React.FC<any> = () => {
  const [detail, setDetail] = useState(Jump.get()?.detail);

  useEffect(() => {
    Modal.info('重新渲染', {maskClickable: true, duration: 500})
  }, [])

  return (
    <div style={{ padding: '6px 12px'}}>
      <Title content={detail.content} h1>{detail.name} {detail.extra && `(${detail.extra})`}</Title>
      <Title>跳转（Jump.go）</Title>
      <Button onClick={() => Jump.go('/basic/jumpTest')}>跳转</Button>
      <Button onClick={() => Jump.go('/basic/jumpTest', { detail: '我是参数', tip: '一个参数时不用写为对象' })}>跳转(携带参数)</Button>
      <Title>重定向（Jump.replace）</Title>
      <Button onClick={() => Jump.replace('/basic/jumpTest')}>重定向</Button>
      <Button onClick={() => Jump.replace('/basic/jumpTest', { detail: '我是参数', tip: '一个参数时不用写为对象' })}>重定向(携带参数)</Button>
      <Title>返回（Jump.back）</Title>
      <Button onClick={() => Jump.back()}>默认返回为1层</Button>
      <Button onClick={() => Jump.back(-2)}>返回（自定义）</Button>
      <Title>跳转外部链接（Jump.href）</Title>
      <Button onClick={() => Jump.href('https://www.baidu.com/')}>跳转百度</Button>
      <Button onClick={() => Jump.href('https://www.baidu.com/', {detail: '看地址栏'})}>跳转百度（携带参数）</Button>
      <Title>获取参数（Jump.get）</Title>
      <Button onClick={() => {
        const res = Jump.get()
        Modal.alert({title: '获取页面参数', content: JSON.stringify(res)})
      }}>获取当前参数</Button>
      <Title>缓存当前页面（Jump.cache）</Title>
      {
        Jump.cache(<Button>缓存跳转</Button>, '/basic/jumpTest')
      }
      {
        Jump.cache(<Button>缓存跳转(携带参数)</Button>, '/basic/jumpTest',{ detail: '我是参数'})
      }
      <Title>设置标题（Jump.title）</Title>
      <Button onClick={() => {Jump.title('欢迎欢迎'); Modal.info('设置成功')}}>设置标题</Button>
    </div>
  )
}

export default Index;
