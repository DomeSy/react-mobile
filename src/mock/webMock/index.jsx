import async from './async'
import html from './html'
import css from './css'
import js from './js'
import DOM from './DOM'
import browser from './browser'

const webMock = [
  ...async,
  ...html,
  ...css,
  ...js,
  ...DOM,
  ...browser
]
export default webMock;