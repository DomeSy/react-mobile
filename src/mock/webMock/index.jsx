import async from './async'
import html from './html'
import css from './css'
import js from './js'

const webMock = [
  ...async,
  ...html,
  ...css,
  ...js
]
export default webMock;