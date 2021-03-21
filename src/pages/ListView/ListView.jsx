import React, { Component } from 'react'
import { Head, List } from './component'
import { connect } from 'react-redux'

import { Method } from '@unilts';
import { DragSort, FromList, Radio } from '@components/HighOrder'

import * as homeActions from '@actions/home'

import './ListView.less'

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

  renderTset = (tag) => {
    return <div className="DDragTest">
      <div className="DDragTest-tag">
        <div>{tag.name}</div>
      </div>
    </div>
  }

  onChange = (list) => {
    console.log(list)
  }

  render() {
    const { homeList } = this.props;
    return (
      <div className="ListView">
        <Head />
        <List list={Object.values(homeList)}/>
      </div>
    )
  }
}

export default ListView
