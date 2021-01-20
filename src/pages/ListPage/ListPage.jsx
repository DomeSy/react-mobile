import React, { Component } from 'react'

import { List } from './component'

import './ListPage'
import { Button } from '@components/ShowTime';
import Base from '@images/icon/base.png'
import Img1 from '@images/icon/img1.png'
import Img2 from '@images/icon/img2.png'
import Img3 from '@images/icon/img3.png'


const listTest = [
  {
    src: Base,
    title: '基础使用',
    tip: '包含颜色文字图标'
  },
  {
    src: Img1,
    title: '基础1',
    tip: '包含颜色文字图标等'
  },
  {
    src: Img2,
    title: '基础2',
    tip: '包含颜色文字图标等'
  },
  {
    src: Img3,
    title: '基础3',
    tip: '包含颜色文字图标等'
  }
]

const listTest2 = [
  {
    src: Base,
    title: '基础使用',
    tip: '包含颜色文字图标'
  },
  {
    src: Img1,
    title: '基础1',
    tip: '包含颜色文字图标等'
  },
  {
    src: Img2,
    title: '基础2123',
    tip: '包含颜色文字图标等'
  }
]

export default class ListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: listTest
    }
  }

  click = () =>{
    console.log('11')
    this.setState({
      list: listTest2
    })
  }

  render() {
    const { list } = this.state;

    return (
      <div className="ListPage">
        <List list={list}/>
        <Button onClick={()=> this.click()}></Button>
      </div>
    )
  }
}
