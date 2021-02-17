import async from './async'
import html from './html'
import css from './css'
import js from './js'
import DOM from './DOM'

const webMock = [
  ...async,
  ...html,
  ...css,
  ...js,
  ...DOM
]
export default webMock;