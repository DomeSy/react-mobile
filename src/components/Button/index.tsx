import React from 'react';
import { Button } from 'antd-mobile'
import { useLockFn } from 'ahooks';
import { IndexProps } from './interface.d'
import './index.less'
/**
 * 按钮 其余按钮属性
 * 
 * @param lock 是否加入静态锁
 */

const Index:React.FC<IndexProps> = ({ lock=false, children, onClick=()=>{}, ...props}) => {

  const submit = useLockFn(onClick)

  return (
    <div className='DButton'>
      <Button
        color='primary'
        block
        loadingText='请稍后...'
        {...props}
        onClick={() => {
          if(lock){
            submit()
          }else{
            onClick()
          }
        }}
      >{children}</Button>
    </div>
  );
}

export default Index;
