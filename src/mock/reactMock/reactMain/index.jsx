
import ReactCommunication from './ReactCommunication'
import setState from './setState'
import reactKey from './reactKey'
import HOC from './HOC'
import VirtualDOM from './VirtualDOM'
import diff from './diff'
import treeDiff from './treeDiff'
import componentDiff from './componentDiff'
import elementDiff from './elementDiff'

const ReactMain = [
  { params: { data: 'ReactCommunication' }, extra:{ noTitle: true }, list: ReactCommunication},
  { params: { data: 'setState' }, extra:{ noTitle: true }, list: setState},
  { params: { data: 'reactKey' }, extra:{ noTitle: true }, list: reactKey},
  { params: { data: 'HOC' }, list: HOC},
  { params: { data: 'VirtualDOM' }, list: VirtualDOM},
  { params: { data: 'diff' }, list: diff},
  { params: { data: 'treeDiff' }, list: treeDiff},
  { params: { data: 'componentDiff' }, list: componentDiff},
  { params: { data: 'elementDiff' }, list: elementDiff},
]

export default ReactMain