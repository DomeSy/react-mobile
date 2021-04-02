import ArrayUniqe from './ArrayUniqe'
import ArrayLink from './ArrayLink'
import ArrayFlat from './ArrayFlat'
import TwoArrayUnique from './TwoArrayUnique'

const Array = [
  { params: { data: 'ArrayUniqe' }, list: ArrayUniqe},
  { params: { data: 'ArrayLink' }, list: ArrayLink},
  { params: { data: 'ArrayFlat' }, list: ArrayFlat},
  { params: { data: 'TwoArrayUnique' }, extra:{ noTitle: true }, list: TwoArrayUnique},
]
export default Array