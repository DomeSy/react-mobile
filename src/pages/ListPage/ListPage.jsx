import React, { Component } from 'react'
import { Axios } from '@unilts';
import { Head, List } from './component'

import './ListPage'


export default class ListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount =  async () => {
    const res = await Axios({id: 1, iid: 21}, {url: 'homeList'})
    console.log(res,'00')
    // this.setState({
    //   list: res.data
    // })
  }

  click = () =>{
    this.setState({
      list: listTest2
    })
  }

  render() {
    const { list } = this.state;

    return (
      <div className="ListPage">
        <Head />
        <List list={list}/>
      </div>
    )
  }
}
