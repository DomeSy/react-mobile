import { Skeleton } from '@components/Animation'
import { Accordion, FromList, Radio, DragSort } from '@components/HighOrder'
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

  static DragSort = () => {
    return <DragSort onChange={(list) => {
      console.log(list,'---')
      Modal.info('调换成功')
    }}/>
  }

  static Modal = ModalTest
}

export default ComponentShow