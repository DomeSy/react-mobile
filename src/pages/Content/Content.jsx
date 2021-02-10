import React, { Component } from 'react';
import { Accordion } from '@components/HighOrder';
import { connect } from 'react-redux';
import { Jump } from '@unilts';
import { Head } from './component'

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

  render() {
    const { homeActive } = this.state;

    return (
      <div>
        <Head />
        <Accordion list={homeActive.children}/>
      </div>
    )
  }
}
export default Index
