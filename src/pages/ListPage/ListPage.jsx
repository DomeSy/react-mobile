import React, { Component } from 'react'
import { Axios } from '@unilts';
import { List } from './component'

import './ListPage'


export default class ListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount =  async () => {
    const res = await Axios({}, {url: 'homeList'})
    this.setState({
      list: res.data
    })
  }

  click = () =>{
    console.log('11')
    this.setState({
      list: listTest2
    })
  }

  render() {
    const { list } = this.state;

    return (
      <div className="ListPage">
        <List list={list}/>
      </div>
    )
  }
}
