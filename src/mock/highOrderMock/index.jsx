import { DAccordion } from '../constants/highOrder'
import Accordion from './Accordion'
import FormList from './FromList'

const highOrderMock = [
  { params: { data: DAccordion }, list: Accordion},
  ...FormList
]
export default highOrderMock;