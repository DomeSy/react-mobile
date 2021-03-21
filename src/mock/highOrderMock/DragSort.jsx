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
    title: '代码 CSS',
    content:  `
      .DAccorion{
        padding: 8px 12px;
        &-List{
          background: @white;
          border-radius: 8px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .04);
          padding: 10px 8px;
          margin-bottom: 12px;
          &:last-of-type{
            margin-bottom: 0px;
          }
          &-Name{
            padding: 5px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 17px;
            line-height: 27px;
          }
          &-Border{
            border-bottom: 1px solid @tip;
          }
          &-Children{
            margin-left: 8px;
            padding: 8px 0px 8px 0px;
            font-size: 13px;
            line-height: 23px;
            border-bottom: 1px solid @tip;
            &:last-of-type{
              border-bottom: 0px;
              padding-bottom: 0px;
            }
            p{
              color: @color;
            }
          }
          &-Roate{
            animation: roate 0.2s linear forwards;
          }
          &-Roates{
            animation: roates 0.2s linear forwards;
          }
        }
      }
      
      @keyframes roate{
        0%{
          transform: rotate(0deg);
        }
        50%{
          transform: rotate(45deg);
        }
        100%{
          transform: rotate(90deg);
        }
      }
      
      @keyframes roates{
        0%{
          transform: rotate(90deg);
        }
        50%{
          transform: rotate(45deg);
        }
        100%{
          transform: rotate(0deg);
        }
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '完整代码',
    content:  `
      class Index extends Component {
        constructor(props){
          super(props);
          this.state = {
            list: []
          } 
        }
      
        static getDerivedStateFromProps(prevProps, prevState){
          const { list = listTest } = prevProps;
          if(list != prevState.list){
            return {
              list
            }
          }
          return null;
        }
      
        componentDidMount = () => {
          this.setState()
        }
      
        // 这里应该首先判断是否有children，用来判断是否跳转
        ChangeName = (listAll, item) => {
          let list = []
          if (item.children) {
            list = listAll.map(ele => {
              ele.active = ele.name === item.name ? item.active === 1 ? 2 : 1 : ele.active ? 2 : '';
              return ele
            } );
          } else {
            list = listAll.map(ele => {
              ele.active = ele.name === item.name ? item.active === 1 ? 2 : '' : ele.active ? 2 : '';
              return ele
            } );
            this.goView(item);
          }
      
          this.setState({
            list
          });
        }
      
        goView = (item) => {
          if(this.props.fn){
            this.props.fn(item)
          }else if(item.path){
            const params = item.params || {}
            Jump.go(item.path, params)
            return;
          }else if(item.src){
            const params = item.params || {}
            Jump.href(item.goSrc, params)
            return;
          }else if(item.message){
            Modal.alert(item.message)
            return;
          }else{
            Jump.go('_404',{text: '返回', title: item.name})
          }
        }
      
        render() {
          const { list } = this.state;
      
          return (
            <div className="DAccorion">
              {
                list.map((item, index) => (
                  <div className="DAccorion-List" key={index}>
                    <div className={item.active === 1 ? 'DAccorion-List-Name DAccorion-List-Border' : 'DAccorion-List-Name'} onClick={() => this.ChangeName(list, item)}>
                      <p>{item.name}</p>
                      <Icon className={item.active === 1 ? 'DAccorion-List-Roate' : item.active === 2 ? 'DAccorion-List-Roates' : ''} type="right" />
                    </div>
                    { item.active == 1 && item.children ?
                      item.children.map((itms, indexs) => (
                        <div className="DAccorion-List-Name DAccorion-List-Children" key={indexs} onClick={() => this.goView(itms)}>
                          <p>{itms.name}</p>
                          <Icon type="right" />
                        </div>
                      )) : ''
                    }
                  </div>
                ))
              }
            </div>
          );
        }
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
        value: '数组'
      },{
        name: 'fn',
        value: '回调'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'list下的参数',
    content: [
      {
        name: 'name',
        value: '标题'
      },{
        name: 'children',
        value: '子列表'
      },{
        name: 'path',
        value: '跳转本地页面'
      },{
        name: 'src',
        value: '跳转外链'
      },{
        name: 'message',
        value: '弹出的信息（比如满足一定的条件才能跳转，如果不满足给出弹框，作为提示）'
      },{
        name: 'params',
        value: '跳转地址携带的参数'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '',
    content: '层级关系 fn > path > src > message , 如果都没有进入404页面',
    method: 'content',
    type: 'red'
  },
  {
    title: '',
    content: 'active 控制状态，并控制下级的列表，1代表展开，2代表关闭，初始值无',
    method: 'content',
    type: 'red'
  }
]

export default DragSort