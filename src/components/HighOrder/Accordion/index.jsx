import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Jump, Modal } from '@unilts'

import './index.less'

// active 控制状态，并控制下级的列表，1代表展开，2代表关闭，初始值无
const list = [
  {
    name: '标题1',
    children: [
      {
        name: 'message',
        message: '暂无内容'
      },
      {
        name: '外链',
        src: 'https://www.baidu.com/',
      },
      {
        name: '本地',
        path: '/',
      },
    ]
  },
  {
    name: '标题2',
    children: [
      {
        name: '外链+参数',
        src: 'https://www.baidu.com/',
        params: {
          text: '1'
        }
      },
      {
        name: '本地+参数',
        path: '/',
        params: {
          text: '1'
        }
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
 * @param params 跳转地址携带的参数
 * 
 * 层级关系 path > src > message , 如果都没有进入404页面
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
    let list = []
    if (item.children) {
      list = listAll.map(ele => {
        ele.active = ele.name === item.name ? item.active === 1 ? 2 : 1 : ele.active ? 2 : '';
        return ele
      } );
    } else {
      list = listAll.map(ele => {
        ele.active = ele.name === item.name ? item.active === 1 ? 2 : '' : ele.active ? 2 : '';
        return ele
      } );
      this.goView(item);
    }

    this.setState({
      list
    });
  }

  goView = (item) => {
    if(item.path){
      const params = item.params || {}
      Jump.go({url: item.path, params})
      return;
    }else if(item.src){
      const params = item.params || {}
      Jump.goSrc(item.goSrc, params)
      return;
    }else if(item.message){
      Modal.alert(item.message)
      return;
    }else{
      Jump.go({url: '_404', params:{text: '返回', title: item.name}})
    }
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