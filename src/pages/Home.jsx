
import React, { Component } from 'react'
import ListPage from './ListPage/ListPage';
import { DWriteText } from '@components/Animation'
import { Button } from '@components/ShowTime';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '你好,我们是神，我们想要上天吗'
    }
  }
  componentDidMount = async() =>{
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

  click = () => {
    this.setState({
      text: '11231231312'
    })
  }

  render() {
    const { text } = this.state
    return (
      <div>
        {/* <ListPage /> */}
        <DWriteText text={text} />
        <Button onClick={()=> this.click()}></Button>
      </div>
    )
  }
}
