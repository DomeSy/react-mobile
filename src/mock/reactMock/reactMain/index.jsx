
import ReactCommunication from './ReactCommunication'
import setState from './setState'
import reactKey from './reactKey'
import HOC from './HOC'

const ReactMain = [
  { params: { data: 'ReactCommunication' }, extra:{ noTitle: true }, list: ReactCommunication},
  { params: { data: 'setState' }, extra:{ noTitle: true }, list: setState},
  { params: { data: 'reactKey' }, extra:{ noTitle: true }, list: reactKey},
  { params: { data: 'HOC' }, list: HOC},
]

export default ReactMain