
import React, { Component } from 'react'
import ListPage from './ListPage/ListPage';
import { MagicText } from '@components/Animation';
import { Button } from '@components/AntD';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import _404Page from "@pages/Router/_404Page"
import HomePage from "@pages/Router/HomePage"
import LoginPage from "@pages/Router/LoginPage"
import UserPage from "@pages/Router/UserPage"
import { EditHight, Title } from '@components/Icon';
import axios from 'axios'
import { Axios } from '@unilts';
import { Control } from 'react-keeper';
import { Jump, Modal } from '@unilts';
import Content from './Content'
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '你好,我们是神，我们想要上天吗',
      number: 0
    }
  }
  componentDidMount = async () =>{
    // Modal.confirm({},() => {console.log('确认')},() => {console.log('取消')})
    // console.log(res, '00')
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
    // Jump.go({url:'login',params:'1111'});
    // Jump.go({params: 'sss' });
    // console.log(this.props,'00')
    // 重定向
    // Control.replace('/login', {name: '123'})
    // Control.go('login',{name: '123'})


    // this.props.pathname = '/login'
    // this.props.history.push('/login')
    // this.props.history.push({pathname: '/login',state:{name: 1123}})
    // this.setState({
    //   text: '11231231312'
    // })
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
        {/* <Content /> */}
        {/* <div onClick={()=> this.onClick(number)}> 点击{number}</div> */}
        <ListPage />
        {/* <MagicText/> */}
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
