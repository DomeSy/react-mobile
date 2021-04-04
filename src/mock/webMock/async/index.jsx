import Timer from './Timer'
import PromiseIntroduce from './PromiseIntroduce'
import Generator from './Generator'
import AsyncAwait from './AsyncAwait'
import Promise from './Promise'
import PromiseUse from './PromiseUse'

const async = [
  { params: { data: 'Timer' }, extra:{noTitle: true}, list: Timer},
  { params: { data: 'PromiseIntroduce' }, extra:{noTitle: true}, list: PromiseIntroduce},
  { params: { data: 'AsyncAwait' }, extra:{noTitle: true}, list: AsyncAwait},
  { params: { data: 'Generator' }, extra:{noTitle: true}, list: Generator},
  { params: { data: 'Promise' }, extra:{noTitle: true}, list: Promise},
  { params: { data: 'PromiseUse' }, extra:{noTitle: true}, list: PromiseUse}
]
export default async