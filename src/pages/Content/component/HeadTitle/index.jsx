import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jump } from '@unilts'
import { Circular } from '@components/Icon'
import { MagicText } from '@components/Animation'

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
      // 如果对你有帮助，请点击右上方的gitHub，给个Star！
      <div className="HeadTitle">
        <div className="HeadTitle-git"><p onClick={() => Jump.href('https://github.com/DomeSy/React-mobile-Domesy')}></p></div>
        <div className="HeadTitle-title">
          <Circular block />
          <div className="HeadTitle-title-name">React</div>
        </div>
        <MagicText />
      </div>
    )
  }
}
export default Index
