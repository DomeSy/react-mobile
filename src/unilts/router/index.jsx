import React, { Component } from 'react';
import { Modal } from '@unilts';
import { HashRouter as Router, Route } from 'react-keeper';


/**
 * @module 路由模块
 * 
 * @param routes 数组，包含所需要的每项
 * @param exact 是否完全匹配(默认完全匹配)
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

    console.log(routes,'000')
    // routes.forEach = 

  }

  render(){
    const { routes } = this.props;

    // console.log(,'11')
    return (
      <>
        <Router>
          <>
            {
              routes.map((item, index) => (
                <Route
                  exact={item.exact ? false : true}
                  index={item.index ? true : false}
                  path={item.path}
                  // component={item.component}
                  loadComponent = {(callback) => {
                    item.title ? document.title = item.title : ''
                    callback(item.component)
                  }}
                  key={index}/>
              ))
            }
          </>
        </Router>
      </>
    )
  }
}

export default Index
