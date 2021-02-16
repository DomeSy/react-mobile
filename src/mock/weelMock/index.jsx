import { DSkeleton } from '../constants/weel'
import Skeleton from './Skeleton'
import Debounce from './Debounce'
import Throttle from './Throttle'

const weelMock = [
  { params: { data: DSkeleton }, list: Skeleton},
  { params: { data: 'Debounce' }, list: Debounce},
  { params: { data: 'Throttle' }, list: Throttle},
]
export default weelMock;