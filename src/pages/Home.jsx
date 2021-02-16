
import React, { Component } from 'react'
import _404Page from "@pages/Router/_404Page"
import { Method } from '@unilts'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
    function* g() {
      yield 'a',
      yield 'b',
      yield 'c';
      return 'ending';
    }
    const gen = g();
    function next() {
      let {value, done} = gen.next();
      console.log(value);  // 依次打印 a b c ending
      if(!done)
      next();    // 直到全部打印完成
    }
    next();
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