import React from 'react'
import { RightOutline } from 'antd-mobile-icons'
import { Circular } from '@/components'
import './index.less'
import { Jump } from '@/utils';
 
interface IndexProps {
  list: Array<any>
}

const Index:React.FC<IndexProps> = ({list=[]}) =>  {

  const goView = async (children = false, value = false) => {
    if(children){
      Jump.go('Content', value);
    }else{
      Jump.go('_404')
    }
  }

  return (
    <div className="DList">
      {
        list.map((item, index) => 
          <div className="DList-Show" key={index} onClick={() => goView(item.children, item.value)}>
            <Circular src={item.src}/>
            <div className="DList-Show-Text">
              <p>{item.title}</p>
              <p>{item.tip}</p>
            </div>
            <RightOutline className="DList-Show-Arrow" />
          </div>
        )
      }
    </div>
  )
}

export default Index;
