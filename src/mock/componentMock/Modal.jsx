import { DModal } from '../constants/component'

const Modal = [
  {
    title: '',
    content: '工作时常常会用到提示框、loading等，这里只是将AntD Mobile进行简单的封装，更加方便的书写',
    method: 'content',
    type: 'blue'
  },
  {
    title: '组件展示',
    content: DModal,
    method: 'component'
  },
  {
    title: '代码示例',
    content: `
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
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '代码',
    content:  `
      class ModalView{
 
      static alert = (data, fn=()=>{}) => {
        let { title='提示', msg='提示内容', button='确认' } = data
        if(typeof data === 'string') msg = data
        Modal.alert(title, msg, [
          { text: button, onPress: fn},
        ])
      }

      static confirm = (data, fn=()=>{}, fn1 =()=>{}) => {
        let { title='提示', msg='提示内容', button='确认', cacel='取消' } = data;
        if(typeof data === 'string') msg = data
        Modal.alert(title, msg, [
          { text: cacel, onPress: fn1},
          {
            text: button,
            onPress: fn
          },
        ])
      }

      static info = (content='提示语', duration=2, mask=true) => {
        Toast.info(content, duration, null, mask);
      }

      static success = (content='success !!!', duration=2, mask=true) => {
        Toast.success(content, duration, null, mask);
      }

      static fail = (content='fail !!!', duration=2, mask=true) => {
        Toast.fail(content, duration, null, mask);
      }

      static loading = (content='加载中...', duration=0, mask=true) => {
        Toast.loading(content, duration, null, mask);
      }

      static hide = () => {
        Toast.hide()
      }
    }`,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: 'alert',
        value: '普通弹框'
      },{
        name: 'confirm',
        value: '确认框'
      },{
        name: 'info',
        value: '轻提示'
      },{
        name: 'success',
        value: '成功'
      },{
        name: 'fail',
        value: '失败'
      },{
        name: 'loading',
        value: '加载框'
      },{
        name: 'hide',
        value: '取消'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '弹框对应的参数',
    content: [
      {
        name: 'data',
        value: '可为字符串 或 对象，1>字符串时为消息内容， 2>对象为 title 标题，msg 为消息内容'
      },{
        name: 'title',
        value: '标题'
      },{
        name: 'msg',
        value: '消息内容'
      },{
        name: 'button',
        value: '确定按钮文字'
      },{
        name: 'fn',
        value: '确认时的回调'
      },{
        name: 'cacel',
        value: '取消按钮'
      },{
        name: 'fn1',
        value: '取消时的回调'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '轻提示对应的参数',
    content: [
      {
        name: 'content',
        value: '加载的文字'
      },{
        name: 'duration',
        value: '显示的时长，默认2'
      },{
        name: 'mask',
        value: '是否可穿透，默认不可穿透'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '',
    content: '在轻提示这里也可以有个回调函数的，但在业务中使用轻提示在掉回调的函数时，比较少，所以没有进行封装',
    method: 'content',
    type: 'red'
  }
]

export default Modal