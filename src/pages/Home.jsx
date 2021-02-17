
import React, { Component } from 'react'
import _404Page from "@pages/Router/_404Page"
import { Method } from '@unilts'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount = () => {

    // const url = 'http://www.domesy.cn/?name=React';
    // const url = 'http://www.domesy.cn/#/?name=React';
    const url = 'http://www.domesy.cn/#/?url=https://www.baidu.com/?name=React';
    const res = Method.getUrlParam('name', url)
    console.log(res,'00')
  }

  render() {
    const Component = this.props.children

    return (
      <div>
        <Component />
      </div>
    )
  }
}

export default Home