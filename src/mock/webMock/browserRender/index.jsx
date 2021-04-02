import browserUrl from './browserUrl'
import browserDNS from './browserDNS'
import browserTCP from './browserTCP'

const browserRender = [
  { params: { data: 'browserUrl' }, extra:{noTitle: true}, list: browserUrl},
  { params: { data: 'browserDNS' }, extra:{noTitle: true}, list: browserDNS},
  { params: { data: 'browserTCP' }, extra:{noTitle: true}, list: browserTCP},
]
export default browserRender