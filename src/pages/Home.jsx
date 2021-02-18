
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

    // 解决键盘弹起后遮挡输入框的问题
    window.addEventListener("resize", () => {
      if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
        window.setTimeout(function () {
            document.activeElement.scrollIntoViewIfNeeded();
        }, 0);
      }
    })
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