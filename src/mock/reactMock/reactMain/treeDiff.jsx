import img from '@images/react/tree.png'

const treeDiff = [
  {
    title: '',
    content: [
      'React通过updateDepth对Virtual DOM树进行层级控制。',
      '对树分层比较，两棵树 只对同一层次节点 进行比较。如果该节点不存在时，则该节点及其子节点会被完全删除，不会再进一步比较。',
      '只需遍历一次，就能完成整棵DOM树的比较。',
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '如果DOM节点出现了跨层级操作,diff会咋办呢？',
    content: [
      'diff只简单考虑同层级的节点位置变换，如果是跨层级的话，只有创建节点和删除节点的操作',
      '如'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    name: '',
    content: img,
    height: '150px',
    method: 'imgs'
  },{
    title: '',
    content: [
      '如上图，以A为根节点的整棵树会被重新创建，而不是移动，因此 官方建议不要进行DOM节点跨层级操作，可以通过CSS隐藏、显示节点，而不是真正地移除、添加DOM节点。'
    ],
    method: 'content',
    type: 'listAll'
  }
  
]

export default treeDiff