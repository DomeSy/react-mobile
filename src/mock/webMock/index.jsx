import Timer from './async/Timer'
import PromiseIntroduce from './async/PromiseIntroduce'
import Generator from './async/Generator'
import AsyncAwait from './async/AsyncAwait'
// import Generator from './async/Generator'

const webMock = [
  { params: { data: 'Timer' }, extra:{noTitle: true}, list: Timer},
  { params: { data: 'PromiseIntroduce' }, extra:{noTitle: true}, list: PromiseIntroduce},
  { params: { data: 'AsyncAwait' }, extra:{noTitle: true}, list: AsyncAwait},
  { params: { data: 'Generator' }, extra:{noTitle: true}, list: Generator},
  // { params: { data: 'Generator' }, extra:{noTitle: true}, list: Generator}
]
export default webMock;