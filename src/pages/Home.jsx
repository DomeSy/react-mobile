
import React, { Component } from 'react'
import _404Page from "@pages/Router/_404Page"
import { Method, Modal } from '@unilts'

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
    const arr2 = [1, 2, 3, [4, 5]]
    const arr = [1, 2, 3, [4, 5, [6], [7,8], [9,[10,11]]]]
    const result = Method.ArrayFlat(arr)
    console.log(result)

    this.IsPC()
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