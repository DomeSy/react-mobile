import React, { Component } from 'react'
import { Head, List } from './component'
import { connect } from 'react-redux'

import { Method, Secret } from '@unilts';
import { DragSort, FromList, Qrcode } from '@components/HighOrder'

import * as homeActions from '@actions/home'

import './ListView.less'
import img from '@images/Info/touxiang.png'


@connect(({ home }) => ({ ...home }), { ...homeActions })
class ListView extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount =  async () => {
    this.props.DHomeInit()
  }

  render() {
    const { homeList } = this.props;
    return (
      <div className="ListView">
        {/* <Head /> */}
        {/* <List list={Object.values(homeList)}/> */}
        <Qrcode logo={img}/>
      </div>
    )
  }
}

export default ListView
