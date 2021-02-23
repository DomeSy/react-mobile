
import ReactCommunication from './ReactCommunication'
import setState from './setState'
import reactKey from './reactKey'
import HOC from './HOC'
import VirtualDOM from './VirtualDOM'
import diff from './diff'
import treeDiff from './treeDiff'
import componentDiff from './componentDiff'
import elementDiff from './elementDiff'
import reactFiber from './reactFiber'
import TimeSlice from './TimeSlice'

const ReactMain = [
  { params: { data: 'ReactCommunication' }, extra:{ noTitle: true }, list: ReactCommunication},
  { params: { data: 'setState' }, extra:{ noTitle: true }, list: setState},
  { params: { data: 'reactKey' }, extra:{ noTitle: true }, list: reactKey},
  { params: { data: 'HOC' }, list: HOC},
  { params: { data: 'VirtualDOM' }, list: VirtualDOM},
  { params: { data: 'diff' }, extra:{ noTitle: true },list: diff},
  { params: { data: 'treeDiff' }, extra:{ noTitle: true },list: treeDiff},
  { params: { data: 'componentDiff' }, extra:{ noTitle: true },list: componentDiff},
  { params: { data: 'elementDiff' },extra:{ noTitle: true }, list: elementDiff},
  { params: { data: 'reactFiber' }, extra:{ noTitle: true },list: reactFiber},
  { params: { data: 'TimeSlice' }, list: TimeSlice},
]

export default ReactMain