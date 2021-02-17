import closure from './closure'
import jsThis from './jsThis'
import jsArrowThis from './jsArrowThis'

const html = [
  { params: { data: 'closure' }, extra:{noTitle: true}, list: closure},
  { params: { data: 'jsThis' }, extra:{noTitle: true}, list: jsThis},
  { params: { data: 'jsArrowThis' }, extra:{noTitle: true}, list: jsArrowThis},

]
export default html