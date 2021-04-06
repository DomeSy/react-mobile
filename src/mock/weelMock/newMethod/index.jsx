import newConCat from './newConCat'
import newAssign from './newAssign'
import newApplyCall from './newApplyCall'
import newTypeof from './newTypeof'
import newHash from './newHash'


const html = [
  { params: { data: 'newConCat' }, extra:{noTitle: true}, list: newConCat},
  { params: { data: 'newAssign' }, extra:{noTitle: true}, list: newAssign},
  { params: { data: 'newApplyCall' }, extra:{noTitle: true}, list: newApplyCall},
  { params: { data: 'newTypeof' }, extra:{noTitle: true}, list: newTypeof},
  { params: { data: 'newHash' }, extra:{noTitle: true}, list: newHash},
]
export default html