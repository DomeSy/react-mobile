import closure from './closure'
import jsThis from './jsThis'
import jsArrowThis from './jsArrowThis'
import jsNew from './jsNew'
import jsCall from './jsCall'

const html = [
  { params: { data: 'closure' }, extra:{noTitle: true}, list: closure},
  { params: { data: 'jsThis' }, extra:{noTitle: true}, list: jsThis},
  { params: { data: 'jsArrowThis' }, extra:{noTitle: true}, list: jsArrowThis},
  { params: { data: 'jsNew' }, extra:{noTitle: true}, list: jsNew},
  { params: { data: 'jsCall' }, extra:{noTitle: true}, list: jsCall},
]
export default html