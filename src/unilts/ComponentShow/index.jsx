import { Skeleton } from '@components/Animation'
import { Accordion, FromList } from '@components/HighOrder'
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

  static Modal = Modal
}

export default ComponentShow