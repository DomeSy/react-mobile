
import React, { Component } from 'react'
import _404Page from "@pages/Router/_404Page"
import { Method } from '@unilts'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
    // console.log(this.props,'--')

    const arr = [19, 3, 4, 10, 1, 3, 8]
    const res = Method.QuickSort(arr)
    console.log(res, '11')
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