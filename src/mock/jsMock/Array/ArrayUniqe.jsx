const Index = [
  {
    title: '',
    content: '数组去重，实际中基本不会遇到，一般而言是面试的时候才会用到',
    method: 'content',
    type: 'blue'
  },
  {
    title: '案例：（以此为测试数据）',
    content: "const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];",
    method: 'content',
    type: 'blue'

  },
  {
    title: '设计思路',
    content: '单选控制全选，全选控制单选',
    method: 'content',
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

export default Index