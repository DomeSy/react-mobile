
import React, { Component } from 'react'
import _404Page from "@pages/Router/_404Page"

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
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