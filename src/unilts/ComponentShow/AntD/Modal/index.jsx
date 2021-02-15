import { Button } from '@components/AntD'
import { Modal } from '@unilts' 

const ModalView = () => {
  const alert = (flag) => {
    if(flag){
      Modal.alert('我是弹框')
    }else{
      Modal.alert({title: '我是提示', msg: '我是弹框', button: '我是确认按钮'},() => {Modal.alert('我是回调')})
    }
  } 

  const confirm = () => {
    Modal.confirm('我是确认框', () => {Modal.alert('我是确认回调')}, () => {Modal.alert('我是取消回调')})
  }

  const info = () => {
    Modal.info('轻提示', 3)
  }

  const success = () => {
    Modal.success('成功提示')
  }

  const fail = () => {
    Modal.fail('失败提示')
  }

  const loading = () => {
    Modal.loading('loading...', 0, false)
  }
  
  const hide = () => {
    Modal.hide()
  }

  return <div>
    <Button onClick={() => alert(true)}>Alert</Button>
    <Button onClick={() => alert(false)}>Alert完整参数</Button>
    <Button onClick={() => confirm()}>confirm</Button>
    <Button onClick={() => info()}>轻提示</Button>
    <Button onClick={() => success()}>成功提示</Button>
    <Button onClick={() => fail()}>失败提示</Button>
    <Button onClick={() => loading()}>loading...</Button>
    <Button onClick={() => hide()}>隐藏loading</Button>
  </div>
}
export default ModalView