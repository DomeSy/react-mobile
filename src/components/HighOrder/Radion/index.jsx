import React, { Component } from 'react'
import { Button } from '@components/AntD'
import { Modal } from '@unilts'

import './index.less'

const test = [
  {
    name: '北京',
  },{
    name: '天津',
  },{
    name: '上海',
    disabled: true
  },{
    name: '江苏',
  },{
    name: '山东',
  }
]

/**
 * @param list 列表数据
 * @param name 名称
 * @param disabled 是否禁用
 * @param active 是否被选中
 */
class Index extends Component {

  constructor(props){
    super(props);
    this.state = {
      allActive: false,
      list: test
    }
  }

  // 统计选中的数量
  allCount = list => {
    let all = 0;
    list.map(item => {
      if(item.active) all++
    })
    return all;
  }

  // 控制单选
  onRadio = (item, index) => {
    if(item.disabled) return;
    let { list } = this.state;
    let allActive = false
    list[index].active = list[index].active ? !list[index].active : true;
    const disList = list.filter(item => !item.disabled)
    const allList = this.allCount(list);
    if(disList.length === allList) allActive = true
    this.setState({
      list,
      allActive
    })
  }

  // 统计数字
  allCount = list => {
    let all = 0;
    list.map(item => {
      if(item.active) all++
    })
    return all;
  }

  // 全选
  allRadio = () => {
    const { list, allActive } = this.state;
    const resList = list.map(item => {
      if(!item.disabled) item.active = allActive ? false : true
      return item
    })
    this.setState({
      list: resList,
      allActive: !allActive
    })
  }


  render() {
    const { list, allActive } = this.state

    return (
      <div className="Radion">
        <div className="Radion-center">
          <div className="Radion-center-all"><p onClick={()=>this.allRadio()} className={allActive ? 'Radion-radioActive' : "Radion-radio"}></p>全选（<span>{this.allCount(list)}</span>/{list.length}）</div>
          <div className="Radion-center-table">
            {
              list.map((item, index) => 
                <div key={index}>
                  <p className={item.disabled ? 'Radion-radioNone' : item.active ? 'Radion-radioActive' : 'Radion-radio'} onClick={() => this.onRadio(item, index)}></p><span>{item.name}</span>
                </div>
              )
            }
          </div>
        </div>
        <Button onClick={() => {
          const result = list.filter(item => item.active)
          Modal.info(`你选择了${result.length}个`)
        }}>确定</Button>
      </div>
    )
  }
}

export default Index
