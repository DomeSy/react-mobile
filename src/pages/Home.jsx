
import React, { Component } from 'react'
import ListPage from './ListPage/ListPage';
import { DWriteText } from '@components/Animation';
import { Button } from '@components/AntD';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import _404Page from "@pages/Router/_404Page"
import HomePage from "@pages/Router/HomePage"
import LoginPage from "@pages/Router/LoginPage"
import UserPage from "@pages/Router/UserPage"
import { EditHight } from '@components/Icon';
import axios from 'axios'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '你好,我们是神，我们想要上天吗',
      number: 0
    }
  }
  componentDidMount = async () =>{
    // const data = await axios.get("/goods/goodsList", {   //这个是通过get发送的
    //   params: {
    //     limit: 5,  //一页有5条数据
    //     page: 1   //第几页
    //   }
    // })
    // console.log(data,'008')
     
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

  click = () => {
    this.setState({
      text: '11231231312'
    })
  }

  onClick = (number) => {

    this.setState({
      number: number+1
    })
  }

  render() {
    const { text, number } = this.state
    return (
      <div>
        HomePage
        {/* <div onClick={()=> this.onClick(number)}> 点击{number}</div> */}
        {/* <ListPage /> */}
        {/* <DWriteText text={text} /> */}
        {/* <Button onClick={()=> this.click()}></Button> */}
        {/* <Router>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户中心</Link>
          <Link to='/login'>登录</Link>
          <Link to='/product/123'>商品</Link>
      
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/user' component={UserPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route component={_404Page} />
          </Switch>
        </Router> */}
      </div>
    )
  }
}
