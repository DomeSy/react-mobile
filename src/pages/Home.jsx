
import React, { Component } from 'react'
import { LineAnimation } from '@components/Canvas'
// import axios from "axios";
// import Mock from 'mockjs';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import HomePage from "@pages/Router/HomePage"
// import UserPage from "@pages/Router/UserPage"
// import LoginPage from "@pages/Router/LoginPage"
// import _404Page from "@pages/Router/_404Page"

export default class Home extends Component {

  componentDidMount = async() =>{
    this.test()
    // axios.get("/goods/goodsList", {   //这个是通过get发送的
    //   params: {
    //     limit: 5,  //一页有5条数据
    //     page: 1   //第几页
    //   }
    // }).then((data) => {
    //   console.log(data, '00000');
    // });
     
    // axios.post('/postdata1', {
    //   params: {
    //       name: 'jack'
    //   }
    // })
    // .then((res)=>{
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  }

  test = () => {

    console.log(this.props,'---')
  }

  render() {
    return (
      <div>
        <LineAnimation />
        {/* <div onClick={this.props.hai}>niasldll1</div> */}
        {/* <Router>
          <Link to='/'>用户</Link>
          <Link to='/login'>登录</Link>
          <Link to='/product/123'>商品</Link>

          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/home" component={HomePage} />

    Î       <Route component={_404Page} />
          </Switch>
        </Router> */}
      </div>
    )
  }
}
