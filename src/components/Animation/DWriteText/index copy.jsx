import React, { Component } from 'react'
import './index.less'

const typingRate = 250;

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state={
      //打字出的文字
      textAreaShow: "",
      // 是否在打字中
      isTyping: false,
      //等待被打字的数组
      waitToType: [props.text],
      // waitToType: ["今天是星期一,","又要起床去上班啦TnT,","又是为了生存的一天。","那好吧，","我现在起床。"] ,
      //延迟时间
      delayTime: this.props.delayTime || 1,
    }
  }

  componentDidMount() {
      let waitToType = this.state.waitToType;
      if (waitToType.length > 0) {
          let stringInput = waitToType.shift();
          setTimeout(() => this.typing(stringInput, stringInput[0], 0), typingRate);
          this.setState({
              waitToType: waitToType
          })
      }
  }

  typing(stringAll, char, nowLength) {
      if (nowLength < stringAll.length) {
          let textAreaShow = this.state.textAreaShow + char;
          this.setState({
              textAreaShow: textAreaShow,
              isTyping: true,
          }, () => {
              setTimeout(() => this.typing(stringAll, stringAll[nowLength + 1], nowLength + 1), typingRate);
          }, this)
      } else if (nowLength >= stringAll.length) {
          this.setState({
              isTyping: false,
          }, () => {
              let waitToType = this.state.waitToType;
              if (waitToType.length > 0) {
                  let stringInput = waitToType.shift();
                  setTimeout(() => this.typing(stringInput, stringInput[0], 0), typingRate);
                  this.setState({
                      waitToType: waitToType
                  })
              }
          }, this)
      }
  }
      
  render() {
    const { textAreaShow } = this.state;
    return (
      <div className='text-content'>
        <div className="title">Typing Effect</div>
        <div className="textArea">{textAreaShow}</div>
      </div>
    );
  }
}
