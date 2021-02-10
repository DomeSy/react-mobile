import React, { Component } from 'react';
import { Accordion } from '@components/HighOrder';
import { connect } from 'react-redux';
import { Jump } from '@unilts';
import * as homeActions from '@actions/home'

import './Content.less'
@connect(({ home }) => ({...home}), {...homeActions})
class Index extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount = () => {
    const title = Jump.get().params
    Jump.title(title)
    this.props.DHomeActive(title)
  }

  render() {
    console.log(this.props, '000')

    return (
      <div>
        <Accordion/>
      </div>
    )
  }
}
export default Index
