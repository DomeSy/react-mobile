import BubbleSort from './BubbleSort'
import ShellSort from './ShellSort'
import QuickSort from './QuickSort'
import MergeSort from './MergeSort'

const algorithmMock = [
  { params: { data: 'BubbleSort' }, list: BubbleSort},
  { params: { data: 'QuickSort' }, list: QuickSort},
  { params: { data: 'ShellSort' }, list: ShellSort},
  { params: { data: 'MergeSort' }, list: MergeSort},
]
export default algorithmMock;