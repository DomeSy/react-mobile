import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import { Jump } from '@/utils';
import { Title } from '@/pages/commonPage'


interface IndexProps {
  count:any;
  dispatch: any
}

const Index: React.FC<IndexProps> = ({ count, dispatch }) => {
  const [detail, setDetail] = useState(Jump.get()?.detail)
  return (
    <div style={{ padding: 12}}>
      <Title content={detail.content} h1>{detail.name} {detail.extra && `(${detail.extra})`}</Title>
      <Title>示例：</Title>
      <div>计数器：{count?.count} {count?.async ? '异步获取' : ''}</div>
      <Button block style={{ marginTop: 12}} color='primary' onClick={() => { dispatch({type: 'count/setAdd'})}} >
        加1
      </Button>
      <Button block style={{ marginTop: 12}} color='primary' onClick={() => { dispatch({type: 'count/setSubtract'}) }} >
        减1
      </Button>
      <Button block style={{ marginTop: 12}} color='primary' onClick={() => { dispatch({type: 'count/setNumber', payload: 7}) }} >
        设置为7
      </Button>
      <Button block style={{ marginTop: 12}} color='primary' onClick={() => { dispatch({type: 'count/asyncAdd'}) }} >
        异步加1
      </Button>
    </div>
  )
}

export default connect(({ count }:any) => ({ count }))(Index);