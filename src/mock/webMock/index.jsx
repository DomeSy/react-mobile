import async from './async'
import html from './html'
import css from './css'
import js from './js'
import DOM from './DOM'
import browser from './browser'
import http from './http'

const webMock = [
  ...async,
  ...html,
  ...css,
  ...js,
  ...DOM,
  ...browser,
  ...http
]
export default webMock;