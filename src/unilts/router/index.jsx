import React, { Component } from 'react';
import { Modal } from '@unilts';
import { HashRouter as Router, Route } from 'react-keeper';
import Home from '@pages/Home';

/**
 * @module 路由模块
 * 
 * @param routes 数组，包含所需要的每项
 * @param exact 是否完全匹配(默认完全匹配)
 * cache属性可以添加属性值，React-Keeper支持的属性值有root（default）、parent。
 * @param catch 页面缓存 支持两种形式 一种是root(默认)，这种为永久缓存，只要根组件不解绑，页面将永久缓存，另一种是parent为父组件缓存，在父组件不解绑的情况下会维持缓存状态
 * @param path 页面路径
 * @param title 页面标题
 * @param component 组件
 */

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      routes: []
    }
  }

  componentDidMount = () => {
    const { routes } = this.props;
  
    if(Object.keys(routes).length === 0){
      Modal.alert('暂未配置路由, 请去配置')
      return;
    }
  }

  render(){
    const { routes } = this.props;

    return (
      <div>
        <Router>
          <div>
            {
              routes.map((item, index) => (
                <Route
                  exact={item.exact ? false : true}
                  index={item.index ? true : false}
                  miss={item.miss ? true : false}
                  path={item.path}
                  cache={item.cache ? item.cache === "parent" ? "parent" : "root" : false}
                  children={item.component}
                  // component={item.component}
                  loadComponent = {(callback) => {
                    item.title ? document.title = item.title : '';
                    callback(Home)
                  }}
                  key={index}/>
              ))
            }
          </div>
        </Router>
      </div>
    )
  }
}

export default Index
