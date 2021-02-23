const diff = [
  {
    title: '传统Diff',
    content: [
      'diff算法即差异查找算法。',
      '对于Html DOM结构即为tree的差异查找算法；而对于计算两颗树的差异时间复杂度为O（n^3）,显然成本太高，React不可能采用这种传统算法'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'React 中的 diff 算法',
    content: [
      'diff算法是调和的具体实现。',
      '将Virtual DOM树转换成真是 DOM树的最少操作的过程 称为 调和'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'diff 算法的作用',
    content: '计算出Virtual DOM中真正变化的部分，并只针对该部分进行原生DOM操作，而非重新渲染整个页面。',
    method: 'content',
  },{
    title: 'diff 策略',
    content: 'React用 三大策略 将O(n^3)复杂度 转化为 O(n)复杂度',
    method: 'content',
  },{
    title: 'diff 策略的三个策略',
    content: [
      {
        name: 'tree diff',
        value: '同级比较，Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。'
      },{
        name: 'component diff',
        value: '拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。'
      },{
        name: 'element diff',
        value: '对于同一层级的一组子节点，通过唯一的key进行区分。'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default diff