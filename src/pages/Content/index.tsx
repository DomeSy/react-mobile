import { useState, useEffect } from 'react';
import { Axios } from "@/utils"
import { Circular } from '@/components'
import { Jump } from '@/utils'
import { RightOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux';

import './index.less'

interface IndexProps {
  app:any;
  dispatch: any
}
const Index:React.FC<IndexProps> = ({ app, dispatch }) => {

  const [data, setData] = useState<any>(false)

  useEffect(() => {
    const key = Jump.get()
    const data = Object.values(app.listHome).filter((item:any) => item.value === key);
    setData(data[0])
  }, [])

  if(!data) return <></>
  
  return (
    <div className="Content">
      <div className="Content-HeadTitle">
        <div className="Content-HeadTitle-title">
          <Circular block src={data.src} />
          <div className="Content-HeadTitle-title-name">{data.title}</div>
        </div>
        <div className="Content-HeadTitle-content">{data?.content}</div>
      </div>
      <div className="Content-List">
        {
          data.children && data.children.map((item:any, index:number) => (
            <div key={index} onClick={() => Jump.go(`${data?.value}/${item.value}`, { detail: item})}>
              <p>{item.name}</p>
              <RightOutline className="DList-Show-Arrow" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default connect(({ app }:any) => ({ app }))(Index);
