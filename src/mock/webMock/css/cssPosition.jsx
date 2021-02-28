const Index = [
  {
    title: '',
    content: [
      {
        name: 'static',
        value: '正常⽂档流定位，此时 top, right, bottom, left 和 z-index 属性⽆效，块级元素从上往下纵向排布，⾏级元素 从左向右排列。'
      },{
        name: 'relative',
        value: '相对定位，此时的『相对』是相对于正常⽂档流的位置。'
      },{
        name: 'absolute',
        value: '相对于最近的⾮ static 定位祖先元素的偏移，来确定元素位置，⽐如⼀个绝对定位元素它的⽗级、和祖 ⽗级元素都为relative，它会相对他的⽗级⽽产⽣偏移。'
      },{
        name: 'fixed',
        value: '指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如那 种回到顶部的按钮⼀般都是⽤此定位⽅式。'
      },{
        name: 'sticky',
        value: '粘性定位，特性近似于relative和fixed的合体，其在实际应⽤中的近似效果就是IOS通讯录滚动的时候的 『顶屁股』。'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default Index