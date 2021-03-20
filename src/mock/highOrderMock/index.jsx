import { DAccordion } from '../constants/highOrder'
import Accordion from './Accordion'
import FormList from './FromList'
import Radio from './Radio'

const highOrderMock = [
  { params: { data: DAccordion }, list: Accordion},
  ...FormList,
  ...Radio
]
export default highOrderMock;