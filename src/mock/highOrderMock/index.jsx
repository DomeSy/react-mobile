import { DAccordion, DDragSort } from '../constants/highOrder'
import Accordion from './Accordion'
import FormList from './FromList'
import Radio from './Radio'
import DragSort from './DragSort'
import Qrcode from './Qrcode'


const highOrderMock = [
  { params: { data: DAccordion }, list: Accordion},
  { params: { data: DDragSort }, list: DragSort},
  { params: { data: 'Qrcode' }, list: Qrcode},
  ...FormList,
  ...Radio,
]
export default highOrderMock;