const Radio = [
  {
    title: '',
    content: '在开发中，有时会遇到单选页面和全选页面，而选择的样式是由图片构成，并且有时要求禁用的无法选择，还能全选显示数字，这篇是最基本的，所以没什么可讲的，下篇会做一个三级的单选全选',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: '地区选择，二级单选多选',
    method: 'content',
  },
  {
    title: '设计思路',
    content: '单选控制全选，全选控制单选',
    method: 'content',
  }, 
  {
    title: '效果展示',
    content: "Radio",
    method: 'component'
  },
  {
    title: '代码 CSS',
    content:  `
      .Radion{
        background: @white;
        &-center{
          padding: 0 16px;
          &-all{
            padding-top: 16px;
            display: flex;
            justify-content: left;
            align-items: center;
            color: @color;
            font-size: 15px;
            span{
              color: @blue;
            }
            p{
              width: 18px;
              height: 18px;
              margin-right: 8px;
            }
          }
          &-table{
            display: flex;
            flex-wrap: wrap;
            div{
              padding-top: 25px;
              display: flex;
              justify-content: left;
              align-items: center;
              color: @color;
              font-size: 15px;
              &:nth-of-type(odd){
                width: 65%;
              }
              &:nth-of-type(event){
                width: 35%;
              }
              p{
                width: 18px;
                height: 18px;
                margin-right: 8px;
              }
            }
          }
        }
        &-radio{
          background: url('../../../images/HeighOrder/Radio/radio.png');
          background-size: 100% 100%;
        }
        &-radioActive{
          background: url('../../../images/HeighOrder/Radio/radioActive.png');
          background-size: 100% 100%;
        }
        &-radioNone{
          background: url('../../../images/HeighOrder/Radio/radioNone.png');
          background-size: 100% 100%;
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
            allActive: false,
            list: test
          }
        }
      
        // 统计选中的数量
        allCount = list => {
          let all = 0;
          list.map(item => {
            if(item.active) all++
          })
          return all;
        }
      
        // 控制单选
        onRadio = (item, index) => {
          if(item.disabled) return;
          let { list } = this.state;
          let allActive = false
          list[index].active = list[index].active ? !list[index].active : true;
          const disList = list.filter(item => !item.disabled)
          const allList = this.allCount(list);
          if(disList.length === allList) allActive = true
          this.setState({
            list,
            allActive
          })
        }
      
        // 统计数字
        allCount = list => {
          let all = 0;
          list.map(item => {
            if(item.active) all++
          })
          return all;
        }
      
        // 全选
        allRadio = () => {
          const { list, allActive } = this.state;
          const resList = list.map(item => {
            if(!item.disabled) item.active = allActive ? false : true
            return item
          })
          this.setState({
            list: resList,
            allActive: !allActive
          })
        }
      
      
        render() {
          const { list, allActive } = this.state
      
          return (
            <div className="Radion">
              <div className="Radion-center">
                <div className="Radion-center-all"><p onClick={()=>this.allRadio()} className={allActive ? 'Radion-radioActive' : "Radion-radio"}></p>全选（<span>{this.allCount(list)}</span>/{list.length}）</div>
                <div className="Radion-center-table">
                  {
                    list.map((item, index) => 
                      <div key={index}>
                        <p className={item.disabled ? 'Radion-radioNone' : item.active ? 'Radion-radioActive' : 'Radion-radio'} onClick={() => this.onRadio(item, index)}></p><span>{item.name}</span>
                      </div>
                    )
                  }
                </div>
              </div>
              <Button onClick={() => {
                const result = list.filter(item => item.active)
                Modal.info(你选择了+ result.length个)
              }}>确定</Button>
            </div>
          )
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
        name: 'name',
        value: '名称'
      },{
        name: 'disabled',
        value: '是否禁用'
      },{
        name: 'active',
        value: '是否被选中'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '',
    content: '这个适用于展示，因为UI肯定都不同，只需要在此基础上更改即可',
    method: 'content',
    type: 'red'
  }
]

export default Radio