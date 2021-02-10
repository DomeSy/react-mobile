import React, { Component } from 'react';
import { Accordion } from '@components/HighOrder';
import { connect } from 'react-redux';
import { Jump } from '@unilts';

import './index.less'
@connect(({ home }) => ({...home}))
class Index extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount = () => {
    console.log(Jump.get())
    console.log(this.props,'001')
  }

  render() {
    return (
      <div>
       你好
      </div>
    )
  }
}
export default Index
