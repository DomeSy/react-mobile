import React, { Component } from 'react';
import { Accordion } from '@components/HighOrder';
import { Skeleton } from '@components/Animation';
import { connect } from 'react-redux';
import { Jump } from '@unilts';
import { HeadTitle } from './component'

import './Content.less'
@connect(({ home }) => ({...home}))
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

  goView = (msg, homeActive) => {
    console.log(msg,'----', homeActive)

    if(homeActive.goView){
      // 不跳转统一页面
    }else{
      console.log('11')
      Jump.go('Detail')
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
