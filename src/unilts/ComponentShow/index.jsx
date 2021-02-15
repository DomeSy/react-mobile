import { Skeleton } from '@components/Animation'
import { Accordion } from '@components/HighOrder'
import { Modal } from './AntD'

class ComponentShow {
  static Skeleton = () => {
    return <Skeleton />
  }
  
  static Accordion = () => {
    return <Accordion />
  }

  static Modal = Modal
}

export default ComponentShow