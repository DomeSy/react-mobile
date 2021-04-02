import async from './async'
import html from './html'
import css from './css'
import js from './js'
import DOM from './DOM'
import browser from './browser'
import browserRender from './browserRender'
import git from './git'
import http from './http'
import ts from './ts'

const webMock = [
  ...async,
  ...html,
  ...css,
  ...js,
  ...DOM,
  ...git,
  ...browser,
  ...browserRender,
  ...http,
  ...ts,
]
export default webMock;