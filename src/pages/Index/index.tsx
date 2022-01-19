import React, { useState, useEffect } from 'react';
import { Jump } from '@/utils';
import { List } from './component'
import { connect } from 'react-redux';

import info from '@/images/Info/touxiang.jpeg'
import './index.less'

interface IndexProps {
  app:any;
  dispatch: any
}

const Index:React.FC<IndexProps> = ({app, dispatch})=> {

  const [list, setList] = useState([])

  useEffect(() => {
    if(app.listHome && Array.isArray(app.listHome) && app.listHome.length === 0){
      dispatch({type: 'app/getList'})
    }else{
      setList(app?.listHome || [])
    }
  }, [app.listHome])

  return (
    <div className='Index'>
      <div className="Index-Head">
          <div>
            <img src={info}></img>
          </div>
          <div>
            <p>react-mobile1</p>  
            <img onClick={() => Jump.href('https://github.com/DomeSy/react-mobile')} src="https://img.shields.io/github/stars/DomeSy/react-mobile.svg?style=social" alt=""/>
          </div>
          <div>
            <p style={{fontSize: 12,lineHeight: '22px', opacity: 0.7}}>基于 react、react-mobile、react-keeper 的移动端组件库</p>
          </div>
      </div>
      {
        list.length !== 0 && <List list={list} />
      }
    </div>
  );
}

export default connect(({ app }:any) => ({ app }))(Index);
