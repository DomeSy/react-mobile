import Timer from './Timer'
import PromiseIntroduce from './PromiseIntroduce'
import Generator from './Generator'

const webMock = [
  { params: { data: 'Timer' }, extra:{noTitle: true}, list: Timer},
  { params: { data: 'PromiseIntroduce' }, extra:{noTitle: true}, list: PromiseIntroduce},
  { params: { data: 'Generator' }, extra:{noTitle: true}, list: Generator}
]
export default webMock;