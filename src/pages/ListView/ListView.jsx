import React, { Component } from 'react'
import { Axios } from '@unilts';
import { Head, List } from './component'

import './ListView'


class ListView extends Component {

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
    this.setState({
      list: listTest2
    })
  }

  render() {
    const { list } = this.state;

    return (
      <div className="ListView">
        <Head />
        <List list={list}/>
      </div>
    )
  }
}

export default ListView
