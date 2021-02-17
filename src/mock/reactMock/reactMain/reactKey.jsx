const ReactCommunication = [
  {
    title: '',
    content: 'key这个属性一般是在输出循环列表时，react要求我们填写的一个属性，如果不填的话，在控制台会给出警告，当然页面渲染也是可以正常渲染的，但是可能会引发一些不确定的bug，所以我们在写循环列表输出时还是建议将key这个属性带上。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '示例',
    content:  `
      {
        this.state.users&&this.state.users.map(item=>{
            return <li key={item.id}>{item.name}: 来啦</li>
        })
      }
    `,
    method: 'edit',
  },
  {
    title: '',
    content: '上面这行代码是我们平时作为列表显示的写法，假设我们这个users中有4个成员：张三、李四、王五、马六；那么其输出结果为：',
    method: 'content'
  },
  {
    title: '示例',
    content:  `
      <li>张三: 来啦</li>
      <li>李四: 来啦</li>
      <li>王五: 来啦</li>
      <li>马六: 来啦</li>
    `,
    method: 'edit',
  },{
    title: '',
    content: [
      '其实正常来说这个key写与不写输出结果都是这个结果，写与不写的区别主要在于更新上。',
      '当我们需要渲染一个列表的时候，React 会存储这个列表每一项的相关信息，当我们要更新这个列表时，React需要确定哪些项发生了改变。',
      '我们有可能增加、删除、重新排序或者更新列表项。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '在react中采用的是diff算法来对比新旧虚拟节点，从而更新节点',
    content: [
      '在交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。',
      '如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快',
      '其实如果说只是文本内容改变了，不写key反而性能和效率更高，主要是因为不写key是将所有的文本内容替换一下，节点不会发生变化，而写key则涉及到了节点的增和删，发现旧key不存在了，则将其删除，新key在之前没有，则插入，这就增加性能的开销。',
      '当然在我们正常的开发中，这种及其简单的更新是很少见的，大部分还是复杂的内容更新，所以按大局来说还是写key的效率高一些，写key增加的这一点点的性能开销在用户的视角上时感知不到的。'
    ],
    method: 'content',
    type: 'listAll'
  },
]

export default ReactCommunication