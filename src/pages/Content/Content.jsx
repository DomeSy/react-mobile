import React, { Component } from 'react'
import { Accordion } from '@components/HighOrder'
import { Skeleton } from '@components/Animation'
import { connect } from 'react-redux'
import { Jump } from '@unilts'
import { HeadTitle } from './component'
import * as DeatilAction from '@actions/detail'

import './Content.less'
@connect(({ home }) => ({...home}), {...DeatilAction})
class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      homeActive: []
    }
  }

  componentDidMount = () => {
    const title = Jump.get().params
    const { homeList } = this.props
    const homeActive = Object.values(homeList).filter(item => item.title === title)
    this.setState({
      homeActive: homeActive[0]
    })
    Jump.title(title)
  }

  goView = async (msg, homeActive) => {
    if(homeActive.goView){
      // 不跳转统一页面
    }else{
      console.log( msg.value, '999')
      const res = await this.props.DDetailInit({url: homeActive.value, data: msg.value})
      if(!res) return;
      Jump.go('Detail', {name: msg.name})
    }
  }

  render() {
    const { homeActive } = this.state;

    if(homeActive.length === 0) {
      return (
        <Skeleton></Skeleton>
      )
    }

    return (
      <div>
        <HeadTitle data={homeActive} />
        <Accordion list={homeActive.children} fn={(msg) => this.goView(msg, homeActive)} />
      </div>
    )
  }
}
export default Index
