import ArrayUniqe from './ArrayUniqe'
import ArrayLink from './ArrayLink'
import ArrayFlat from './ArrayFlat'
import TwoArrayUnique from './TwoArrayUnique'
import ArraySort from './ArraySort'

const Array = [
  { params: { data: 'ArrayUniqe' }, list: ArrayUniqe},
  { params: { data: 'ArrayLink' }, list: ArrayLink},
  { params: { data: 'ArrayFlat' }, list: ArrayFlat},
  { params: { data: 'TwoArrayUnique' }, extra:{ noTitle: true }, list: TwoArrayUnique},
  { params: { data: 'ArraySort' }, list: ArraySort},
]
export default Array