import Browsers from './Browsers'
import browserFrom from './browserFrom'
import browserUI from './browserUI'
import browserCSS from './browserCSS'
import browserTree from './browserTree'
import browserUrl from './browserUrl'

const browser = [
  { params: { data: 'browser' }, extra:{noTitle: true}, list: Browsers},
  { params: { data: 'browserFrom' }, extra:{noTitle: true}, list: browserFrom},
  { params: { data: 'browserUI' }, extra:{noTitle: true}, list: browserUI},
  { params: { data: 'browserCSS' }, extra:{noTitle: true}, list: browserCSS},
  { params: { data: 'browserTree' }, extra:{noTitle: true}, list: browserTree},
  { params: { data: 'browserUrl' }, extra:{noTitle: true}, list: browserUrl},
]
export default browser