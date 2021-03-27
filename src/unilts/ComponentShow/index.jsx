import { Skeleton } from '@components/Animation'
import { Accordion, FromList, Radio, DragSort, RadioCity } from '@components/HighOrder'
import { ModalTest } from './AntD'
import { Modal } from '@unilts'

class ComponentShow {
  static Skeleton = () => {
    return <Skeleton />
  }
  
  static Accordion = () => {
    return <Accordion />
  }

  static FromIntroduce = () => {
    return <FromList />
  }

  static Radio = () => {
    return <Radio />
  }

  static RadioCity = () => {
    return <RadioCity />
  }

  static DragSort = () => {
    return <DragSort onChange={(list) => {
      console.log(list,'改变后的数据')
      Modal.info('调换成功，详情数据请看打印情况')
    }}/>
  }

  static Modal = ModalTest
}

export default ComponentShow