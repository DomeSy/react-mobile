import HttpRequest from './HttpRequest'
import HttpGETPOST from './HttpGETPOST'

const http = [
  { params: { data: 'HttpRequest' }, extra:{noTitle: true}, list: HttpRequest},
  { params: { data: 'HttpGETPOST' }, list: HttpGETPOST},
]
export default http