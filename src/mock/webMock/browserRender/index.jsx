import browserUrl from './browserUrl'
import browserDNS from './browserDNS'

const browserRender = [
  { params: { data: 'browserUrl' }, extra:{noTitle: true}, list: browserUrl},
  { params: { data: 'browserDNS' }, extra:{noTitle: true}, list: browserDNS},
]
export default browserRender