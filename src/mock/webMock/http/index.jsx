import HttpRequest from './HttpRequest'
import HttpGETPOST from './HttpGETPOST'
import HttpCount from './HttpCount'

const http = [
  { params: { data: 'HttpRequest' }, extra:{noTitle: true}, list: HttpRequest},
  { params: { data: 'HttpGETPOST' }, list: HttpGETPOST},
  { params: { data: 'HttpCount' }, list: HttpCount},
]
export default http