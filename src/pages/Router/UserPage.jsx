import React, { Component } from 'react'
import Test from "@pages/Router/Test"
import Test1 from "@pages/Router/Test1"
import Test2 from "@pages/Router/Test2"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to='/'>中心</Link>
          <Link to='/user/test'>测试</Link>
          <Link to='/user/test1'>测试1</Link>
          <Link to='/test2'>测试2</Link>
      
          <Switch>
            <Route path='/user/test' component={Test}/>
            <Route path='/user/test1' component={Test1}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
