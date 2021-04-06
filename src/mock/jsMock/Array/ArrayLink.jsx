const RadioCity = [
  {
    title: '数组与链表的区别',
    content: [
      '数组是连续存储的，而链表不是连续存储的',
      '数组可以随机访问，而链表不能，查找只能顺着链子遍历下去',
      '数组的插入操作为O(n)，而链表的插入操作为O(1)。'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '数组转链表，递归版，占用的栈空间为O(n)',
    content:  `
      function arrayList(ary, start = 0) {
        if(start === ary.length) {
          return null
        }
        let node = {
          value: ary[start],
          next: null
        }
        let rest = arrayList(ary, start + 1)
        node.next = rest
        return node 
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '链表转数组',
    content:  `
      function listArray(head) {
        if(!head) {
            return []
        }
        const result = [head.value]
        const restValues = listArray(head.next)
        return result.concat(restValues)
      }
    `,
    method: 'edit',
    copy: true
  }
]

export default RadioCity