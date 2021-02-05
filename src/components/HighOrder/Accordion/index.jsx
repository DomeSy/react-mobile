import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Jump } from '@unilts'

import './index.less'

// active 控制状态，并控制下级的列表，1代表展开，2代表关闭，初始值无
const list = [
  {
    name: '标题1',
    children: [
      {
        name: '下级1',
      },
      {
        name: '下级2',
      }
    ]
  },
  {
    name: '标题2',
    children: [
      {
        name: '下级1',
      },
      {
        name: '下级2',
      },
      {
        name: '下级2',
      }
    ]
  },
  {
    name: '标题3',
    children: [
      {
        name: '下级1',
      },
      {
        name: '下级2',
      },
      {
        name: '下级2',
      }
    ]
  },
  {
    name: '标题4',
  }
]

/**
 * @module 手风琴列表
 *  
 * @param name 标题
 * @param children 子列表
 * @param path 跳转本地页面
 * @param src 跳转外链
 * @param message 弹出的信息（比如满足一定的条件才能跳转，如果不满足给出弹框，作为提示）
 */

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      list
    } 
  }

  // 这里应该首先判断是否有children，用来判断是否跳转
  ChangeName = (listAll, item) => {
    if (item.children) {
      const list = listAll.map(ele => {
        ele.active = ele.name === item.name ? item.active === 1 ? 2 : 1 : ele.active ? 2 : '';
        return ele
      } );
      this.setState({
        list
      });
    } else {
      this.goView(item);
    }
  }

  goView = (item) => {
    console.log(item)
  }

  render() {

    const { list } = this.state;

    return (
      <div className="DAccorion">
        {
          list.map((item, index) => (
            <div className="DAccorion-List" key={index}>
              <div className={item.active === 1 ? 'DAccorion-List-Name DAccorion-List-Border' : 'DAccorion-List-Name'} onClick={() => this.ChangeName(list, item)}>
                <p>{item.name}</p>
                <Icon className={item.active === 1 ? 'DAccorion-List-Roate' : item.active === 2 ? 'DAccorion-List-Roates' : ''} type="right" />
              </div>
              { item.active == 1 && item.children ?
                item.children.map((itms, indexs) => (
                  <div className="DAccorion-List-Name DAccorion-List-Children" key={indexs} onClick={() => this.goView(itms)}>
                    <p>{itms.name}</p>
                    <Icon type="right" />
                  </div>
                )) : ''
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Index;