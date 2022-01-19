import React, { useEffect } from 'react';
import { Jump, Modal } from '@/utils';
import { Button } from '@/components';

const Test:React.FC<any> = () => {

  useEffect(() => {
    const res = Jump.get()

    Modal.alert({title: '获取页面参数', content: Object.keys(res).length === 0 ? '当前页面未获取参数' : JSON.stringify(res)})

  })

  return (
    <div>
      我是跳转测试页面
      <Button onClick={() => Jump.back()}>返回</Button>
    </div>
  );
}

export default Test;
