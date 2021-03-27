import { DSkeleton } from '../constants/weel'
import Skeleton from './Skeleton'
import Debounce from './Debounce'
import Throttle from './Throttle'
import Secret from './Secret'
import cros from "./cros";

const weelMock = [
  { params: { data: DSkeleton }, list: Skeleton},
  { params: { data: 'Debounce' }, list: Debounce},
  { params: { data: 'Throttle' }, list: Throttle},
  { params: { data: 'Secret' }, list: Secret},
  ...cros,
]
export default weelMock;