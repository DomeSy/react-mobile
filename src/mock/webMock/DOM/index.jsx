import eventBubbling from './eventBubbling'
import eventCatch from './eventCatch'
import eventL from './eventL'
import eventWt from './eventWt'

const html = [
  { params: { data: 'eventBubbling' }, extra:{noTitle: true}, list: eventBubbling},
  { params: { data: 'eventCatch' }, extra:{noTitle: true}, list: eventCatch},
  { params: { data: 'eventL' }, extra:{noTitle: true}, list: eventL},
  { params: { data: 'eventWt' }, extra:{noTitle: true}, list: eventWt},

]
export default html