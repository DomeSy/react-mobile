import ArrayTree from './ArrayTree'
import getUrlParam from './getUrlParam'
import Array from './Array'


const jsMock = [
  { params: { data: 'ArrayTree' }, list: ArrayTree},
  { params: { data: 'getUrlParam' }, list: getUrlParam},
  ...Array
]
export default jsMock;