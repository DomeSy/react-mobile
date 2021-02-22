import Browsers from './Browsers'
import browserFrom from './browserFrom'

const browser = [
  { params: { data: 'browser' }, extra:{noTitle: true}, list: Browsers},
  { params: { data: 'browserFrom' }, extra:{noTitle: true}, list: browserFrom},

]
export default browser