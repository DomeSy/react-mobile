
import React, { Component } from 'react'
import ListView from './ListView/ListView';
import { Button } from '@components/AntD';
import _404Page from "@pages/Router/_404Page"

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '你好,我们是神，我们想要上天吗',
      number: 0
    }
  }
  componentDidMount = async () =>{
  }

  click = () => {
  }

  onClick = (number) => {
    this.setState({
      number: number+1
    })
  }

  render() {
    const { text, number } = this.state

    return (
      <div>
        <ListView />
      </div>
    )
  }
}
