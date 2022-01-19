
import { Component } from 'react'

class Home extends Component {
  constructor(props:any){
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
      // 解决键盘弹起后遮挡输入框的问题
      window.addEventListener("resize", () => {
       if(typeof document === 'object'&& document.activeElement){
          if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
            window.setTimeout(() => {
              //@ts-ignore
              document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
        }
       }
      })
  }

  render() {
    const Component:any = this.props.children

    return (
      <>
        <Component />
      </>
    )
  }
}

export default Home