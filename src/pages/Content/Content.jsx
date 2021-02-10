import React, { Component } from 'react';
import { Accordion } from '@components/HighOrder';
import { connect } from 'react-redux';
import { Jump } from '@unilts';

import './Content.less'
@connect(({ home }) => ({...home}))
class Index extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount = () => {
    const title = Jump.get().params
    Jump.title(title)
  }

  render() {

    return (
      <div>
        <Accordion/>
      </div>
    )
  }
}
export default Index
