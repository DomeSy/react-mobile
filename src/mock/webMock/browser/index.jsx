import Browsers from './Browsers'
import browserFrom from './browserFrom'
import browserUI from './browserUI'
import browserCSS from './browserCSS'

const browser = [
  { params: { data: 'browser' }, extra:{noTitle: true}, list: Browsers},
  { params: { data: 'browserFrom' }, extra:{noTitle: true}, list: browserFrom},
  { params: { data: 'browserUI' }, extra:{noTitle: true}, list: browserUI},
  { params: { data: 'browserCSS' }, extra:{noTitle: true}, list: browserCSS},
]
export default browser