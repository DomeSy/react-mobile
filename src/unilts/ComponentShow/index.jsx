import { Skeleton } from '@components/Animation'
import { Accordion, FromList, Radio } from '@components/HighOrder'
import { Modal } from './AntD'

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

  static Modal = Modal
}

export default ComponentShow