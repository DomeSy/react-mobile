import { DSkeleton } from '../constants/weel'
import Skeleton from './Skeleton'
import Debounce from './Debounce'
import Throttle from './Throttle'
import cros from "./cros";

const weelMock = [
  { params: { data: DSkeleton }, list: Skeleton},
  { params: { data: 'Debounce' }, list: Debounce},
  ...cros,
]
export default weelMock;