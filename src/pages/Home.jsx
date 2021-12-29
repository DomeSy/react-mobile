
import React, { Component } from 'react'
import _404Page from "@pages/Router/_404Page"
import { Method, Modal } from '@unilts'
import { Button } from 'antd-mobile'
import img from '@images/browser/webkit.png'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
    // 解决键盘弹起后遮挡输入框的问题
    window.addEventListener("resize", () => {
      if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
        window.setTimeout(function () {
            document.activeElement.scrollIntoViewIfNeeded();
        }, 0);
      }
    })
    // console.log(,'--')
    // const result = Method.ArraySort(arr, 'number')
    // console.log(JSON.stringify(result))

    // this.IsPC()
  }

  IsPC() {  
    let width = screen.width;
    if(width > 1100){
      Modal.alert('请在开发者模式查看，效果更佳')
    }
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