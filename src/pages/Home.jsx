
import React, { Component } from 'react'
import _404Page from "@pages/Router/_404Page"
import { Method } from '@unilts'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
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