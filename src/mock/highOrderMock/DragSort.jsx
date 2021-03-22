import { DDragSort } from '../constants/highOrder'

const DragSort = [
  {
    title: '',
    content: '随着移动端的兴起，拖拽基本成了基础，而在React中，推荐使用react-draggable-tags的插件，能够轻松实现拖拽排序的功能',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: '拖拽场景，拖拽排序',
    method: 'content',
  },
  {
    title: '效果展示',
    content: DDragSort,
    method: 'component'
  },
  {
    title: '完整代码',
    content:  `
      function Index({list = [], inLine = false, onChange=()=>{}, render=()=>{}}) {

        if(!list[0].id){
          list.map((item, index) => item.id = index)
        }
      
        return (
          <div className="DDragSort">
            <DraggableArea
              isList={inLine ? false : true}
              initialTags={list}
              render ={({tag}) => render(tag)}
              onChange={(tags) => onChange(tags)}
            />
          </div>
        )
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: 'list',
        value: '数组（必传）'
      },{
        name: 'onChange',
        value: '产生变化时的函数，接收变化后的数组（必传）'
      },{
        name: 'render',
        value: '渲染的内容，接收list数组中的每一项，这里当做循环的div就可以（必传）'
      },{
        name: 'inLine',
        value: '是否为inline模式，默认为block'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'list下的参数',
    content: [
      {
        name: 'id',
        value: '必要的参数，不能相同，就是key，如果不传，则按index'
      },{
        name: 'extra',
        value: '其余什么参数都能传'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'render',
    content: '这里需要注意Draggable组件包裹的组件是有一些默认样式的',
    method: 'content',
    type: 'red'
  },
  {
    title: '使用示例 Css代码',
    content:  `
      .DDragTest{
        &-tag{
          padding: 4px 16px;
          div{
            background: @white;
            font-size: 15px;
            line-height: 25px;
            padding: 7px 8px;
            color: @color;
            border-radius: 5px;
            border: 1px dashed @blue;
          }
        }
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '使用示例 JSX代码',
    content:  `
      const TestDarg = [
        {name: 'apple'},
        {name: 'watermelon'},
        {name: 'banana'},
        {name: 'lemon'},
        {name: 'orange'},
      ]
      class ListView extends Component {

        constructor(props){
          super(props);
          this.state = {
            list: []
          }
        }
      
        renderTset = (tag) => {
          return <div className="DDragTest">
            <div className="DDragTest-tag">
              <div>{tag.name}</div>
            </div>
          </div>
        }
      
        onChange = (list) => {
          console.log(list)
        }
      
        render() {
          return (
            <div>
              <DragSort list={TestDarg} render={(e) => this.renderTset(e)} onChange={(list) => this.onChange(list)}></DragSort>
            </div>
          )
        }
      }
    `,
    method: 'edit',
    copy: true
  }
]

export default DragSort