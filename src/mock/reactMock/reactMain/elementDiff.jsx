import img from '@images/react/element.png'
import img1 from '@images/react/element1.png'
import img2 from '@images/react/element2.png'

const elementDiff = [
  {
    title: '差异类型',
    content: [
      '替换原来的节点，例如把div换成了p，Comp1换成Comp2',
      '移动、删除、新增子节点， 例如ul中的多个子节点li中出现了顺序互换。',
      '修改了节点的属性，例如节点类名发生了变化',
      '对于文本节点，文本内容可能会改变'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '重排（reorder）操作',
    content: '有三个操作：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）。',
    method: 'content',
  },{
    title: '',
    content: [
      {
        name: 'INSERT_MARKUP',
        value: '新的 component 类型不在老集合里， 即是全新的节点，需要对新节点执行插入操作。',
      },{
        name: 'MOVE_EXISTING',
        value: '在老集合有新 component 类型，且 element 是可更新的类型，generateComponentChildren 已调用 receiveComponent，这种情况下prevChild=nextChild，就需要做移动操作，可以复用以前的 DOM 节点。',
      },{
        name: 'REMOVE_NODE',
        value: '老 component 类型，在新集合里也有，但对应的 element 不同则不能直接复用和更新，需要执行删除操作，或者老 component 不在新集合里的，也需要执行删除操作',
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '当节点处于同一层级时，diff提供三种节点操作：删除、插入、移动。',
    content: [
      {
        name: '插入',
        value: '组件 C 不在集合（A,B）中，需要插入',
      },{
        name: '删除',
        value: '组件 D 在集合（A,B,D）中，但 D的节点已经更改，不能复用和更新，所以需要删除 旧的 D ，再创建新的。组件 D 之前在 集合（A,B,D）中，但集合变成新的集合（A,B）了，D 就需要被删除。',
      },{
        name: '移动',
        value: '组件D已经在集合（A,B,C,D）里了，且集合更新时，D没有发生更新，只是位置改变，如新集合（A,D,B,C），D在第二个，无须像传统diff，让旧集合的第二个B和新集合的第二个D 比较，并且删除第二个位置的B，再在第二个位置插入D，而是 （对同一层级的同组子节点） 添加唯一key进行区分，移动即可',
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '情形一',
    content: '新旧集合中存在相同节点但位置不同时，如何移动节点',
    method: 'content',
  },
  {
    name: '',
    content: img,
    height: '150px',
    method: 'imgs'
  },{
    title: 'diff 策略',
    content: [
      '看着上图的 B，React先从新中取得B，然后判断旧中是否存在相同节点B，当发现存在节点B后，就去判断是否移动B。',
      '在旧 中的index=1，它的lastIndex=0，不满足 index < lastIndex 的条件，因此 B 不做移动操作。此时，一个操作是，lastIndex=(index,lastIndex)中的较大数=1.',
      '注意：lastIndex有点像浮标，或者说是一个map的索引，一开始默认值是0，它会与map中的元素进行比较，比较完后，会改变自己的值的（取index和lastIndex的较大数）。',
      '看着 A，A在旧的index=0，此时的lastIndex=1（因为先前与新的B比较过了），满足index<lastIndex，因此，对A进行移动操作，此时lastIndex=max(index,lastIndex)=1。',
      '看着D，同（1），不移动，由于D在旧的index=3，比较时，lastIndex=1，所以改变lastIndex=max(index,lastIndex)=3',
      '看着C，同（2），移动，C在旧的index=2，满足index<lastIndex（lastIndex=3），所以移动。',
      '由于C已经是最后一个节点，所以diff操作结束'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '情形二',
    content: '新集合中有新加入的节点，旧集合中有删除的节点',
    method: 'content',
  },
  {
    name: '',
    content: img2,
    height: '150px',
    method: 'imgs'
  },{
    title: 'diff 策略的三个策略',
    content: [
      'B不移动，不赘述，更新l astIndex=1',
      '新集合取得 E，发现旧不存在，故在lastIndex=1的位置 创建E，更新lastIndex=1',
      '新集合取得C，C不移动，更新lastIndex=2',
      '新集合取得A，A移动，同上，更新lastIndex=2',
      '新集合对比后，再对旧集合遍历。判断 新集合 没有，但 旧集合 有的元素（如D，新集合没有，旧集合有），发现 D，删除D，diff操作结束。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    name: 'diff的不足与待优化的地方',
    content: img2,
    height: '150px',
    method: 'imgs'
  },{
    title: '',
    content: [
      '看图的 D，此时D不移动，但它的index是最大的，导致更新lastIndex=3，从而使得其他元素A,B,C的index<lastIndex，导致A,B,C都要去移动。',
      '理想情况是只移动D，不移动A,B,C。因此，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，会影响React的渲染性能。'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default elementDiff