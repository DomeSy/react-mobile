
import React, { Component } from 'react'
import axios from "axios";
import Mock from 'mockjs'


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
  }

  render() {
    return (
      <div>
        挺好的
      </div>
    )
  }
}
