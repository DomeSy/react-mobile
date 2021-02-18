import { DFromIntroduce } from '../../constants/highOrder'

const FromIntroduce = [
  {
    title: '',
    content: '表单可以说是最常见最常见的了，适用于移动端的动态表单开发',
    method: 'content',
    type: 'blue'
  },
  {
    title: '前言',
    content: '之前是做电子政务这一块的，所以接触的表单会非常非常多，各式各样，千变一律，公司呢也没有一个统一的动态表单组件，各种各样写的表单，逻辑十分难懂，页面代码冗余，在项目上也封装过一些动态表单（Vue），但封装的仅使用当时项目表单的需求，所以这次封装一个React的动态表单，至少能满足80%的表单吧',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: '一开始，看antd-mobile的List组件，第一眼望去，新想这是写的神马，然后在自己写的时候才发现，antd-mobile写的真是好，简直爽到家了，希望大家喜欢',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: '需要用户填写信息的表单页面',
    method: 'content',
  },
  {
    title: '设计思路',
    content: '根据Antd-mobile的List,  InputItem, Picker, DatePicker配合rc-form进行二次封装，只需要传入一个数组，就能完成动态表单的构建，并且支持规则的自由设定，如果有必填的选项，那么会给出对应的提示语，直到条件全部满足，才会将最终的结果传递非父组件，所以只要准备好一个数组就可以了',
    method: 'content',
  }, {
    title: '',
    content: '之后也会设计一些常用的表单组件，如身份证，电话，邮箱，银行卡的的封装模块，做以展示，当然这都是后话了',
    method: 'content',
  },
  {
    title: '效果展示',
    content: DFromIntroduce,
    method: 'component'
  },
  {
    title: '模拟数据',
    content:  `
      .import { Method } from '@unilts';

      const listTest = [
        {
          name: '正常标题',
          extra: '右边内容',
          method: 'item',
        },
        {
          name: '右边超出隐藏',
          extra: '右边内容右边内容右边内容右边内容右边内容',
          method: 'item',
        },
        {
          name: '右边超出不隐藏，会换行',
          extra: '右边内容右边内容右边内容右边内容右边内容',
          method: 'item',
          wrap: true,
        },
        {
          name: '右边超出不隐藏，会换行',
          extra: '右边内容右边内容右边内容右边内容右边内容',
          brief: '辅助功能',
          method: 'item',
          wrap: true,
        },
        {
          name: '银行卡',
          type: 'bankCard',
          valueName: 'value',
          value: '',
          placeholder: '',
          edit: '',
          disabled: '',
          clear: '',
          max: ''
        },{
          name: '密码',
          valueName: 'value2',
          type: 'password'
        },{
          name: '数字',
          valueName: 'value3',
          type: 'number',
          placeholder:'数字'
        },{
          name: '文本',
          valueName: 'value5',
          type: 'text'
        },{
          name: '不可编辑',
          valueName: 'value6',
          type: 'text',
          value: '不可编辑',
          placeholder: '',
          edit: true
        },{
          name: '禁用',
          valueName: 'value7',
          type: 'text',
          placeholder: '',
          disabled: true
        },{
          name: '限制长度为8',
          valueName: 'value8',
          placeholder: '',
          max: '8'
        },{
          name: '不带清楚效果',
          valueName: 'value9',
          placeholder: '',
          clear: true
        },{
          name: '额外注释',
          valueName: 'value10',
          extra: '注释',
          placeholder: '',
          clear: true,
          required: true,
        },
        {
          name: '脱敏',
          valueName: 'value11',
          value: '1769313673',
          validate: '176****9673'
        },
        {
          name: '手机号+验证',
          valueName: 'value12',
          value: '',
          type: 'number',
          max: 11,
          rules: (e) => Method.validatePhone(e),
          rulesMsg: '请输入正确的手机号',
        },
        {
          name: '是否必填',
          valueName: 'value13',
          value: '',
          type: 'text',
          max: 11,
          required: true
        },
        {
          name: '是否测',
          valueName: 'value14',
          value: '',
          type: 'text',
          max: 11,
        },
        {
          method: 'picker',
          name: '单级选择',
          valueName: 'pick1',
          data: [
            {
              label: '春',
              value: '春',
            },
            {
              label: '夏',
              value: '夏',
            },
            {
              label: '秋',
              value: '秋',
            },
            {
              label: '冬',
              value: '冬',
            },
          ]
        },{
          method: 'picker',
          name: '二级选择',
          valueName: 'pick2',
          data: [
            {
              label: '北京',
              value: '01',
              children: [
                {
                  label: '东城区',
                  value: '01-1',
                },
                {
                  label: '西城区',
                  value: '01-2',
                },
                {
                  label: '崇文区',
                  value: '01-3',
                },
                {
                  label: '宣武区',
                  value: '01-4',
                },
              ],
            }
          ],
          cols: '2',
          title: '北京市选择',
          extra: '请选择城市'
        },{
          method: 'picker',
          name: '二级选择不级联',
          valueName: 'pick3',
          data: [
            [
              {
                label: '2013',
                value: '2013',
              },
              {
                label: '2014',
                value: '2014',
              },
            ],
            [
              {
                label: '春',
                value: '春',
              },
              {
                label: '夏',
                value: '夏',
              },
            ],
          ],
          cols: '2',
          cascade: true
        },{
          method: 'picker',
          name: '二三级混合级联',
          valueName: 'pick4',
          data: [
            {
              label: '北京',
              value: '01',
              children: [
                {
                  label: '东城区',
                  value: '01-1',
                },
                {
                  label: '西城区',
                  value: '01-2',
                },
                {
                  label: '崇文区',
                  value: '01-3',
                },
                {
                  label: '宣武区',
                  value: '01-4',
                },
              ],
            },
            {
              label: '浙江',
              value: '02',
              children: [
                {
                  label: '杭州',
                  value: '02-1',
                  children: [
                    {
                      label: '西湖区',
                      value: '02-1-1',
                    },
                    {
                      label: '上城区',
                      value: '02-1-2',
                    },
                    {
                      label: '江干区',
                      value: '02-1-3',
                    },
                    {
                      label: '下城区',
                      value: '02-1-4',
                    },
                  ],
                },
                {
                  label: '宁波',
                  value: '02-2',
                  children: [
                    {
                      label: 'xx区',
                      value: '02-2-1',
                    },
                    {
                      label: 'yy区',
                      value: '02-2-2',
                    },
                  ],
                },
                {
                  label: '温州',
                  value: '02-3',
                },
                {
                  label: '嘉兴',
                  value: '02-4',
                },
                {
                  label: '湖州',
                  value: '02-5',
                },
                {
                  label: '绍兴',
                  value: '02-6',
                },
              ],
            },
          ],
          cols: '3',
          title: '城市',
          extra: '请选择城市'
        },{
          method: 'picker',
          name: '单级选择(默认)',
          valueName: 'pick5',
          value: ['夏'],
          data: [
            {
              label: '春',
              value: '春',
            },
            {
              label: '夏',
              value: '夏',
            },
            {
              label: '秋',
              value: '秋',
            },
            {
              label: '冬',
              value: '冬',
            },
          ]
        },
        {
          method: 'date',
          valueName: 'date1',
          mode: 'date',
          name: '年月日',
          value: new Date(),
          min: new Date(2020, 1, 2),
          max: new Date(2021, 1, 2),
          title: '选择日期',
          extra: '请选择日期'
        },
        {
          method: 'date',
          valueName: 'date2',
          mode: 'datetime',
          name: '年月日时分秒',
          title: '选择日期',
        },
        {
          method: 'date',
          valueName: 'date3',
          mode: 'time',
          name: '时间',
          title: '选择日期',
        },
        {
          method: 'date',
          valueName: 'date4',
          mode: 'time',
          name: '时间有上午和下午',
          title: '选择日期',
          use12Hours:true
        }
      ]
      export default listTest
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '代码 CSS',
    content:  `
      .FromList{
        padding: 8px 0;
        &-Input{
          height: 55px
        }
        &-Right{
          input{
            text-align: right;
          }
        }
        .am-list-item.am-input-item{
          height: auto !important;
        }
        .am-list-item .am-input-label{
          width: 119px !important;
          white-space: break-spaces !important;
        }
      
      }
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '完整代码',
    content:  `
      @createForm()
      class Index extends Component {
        constructor(props){
          super(props)
          this.state = {
            type: 'money',
            list: this.props.list || listTest,
            date: new Date(),
          }
        }
      
        componentDidMount = () => {
          const list = this.props.list || listTest
          let FromList = [];
          list.map(item => {
            const arr = {
              value: item.value || '',
              error: item.error ? false : true
            }
            FromList = [...FromList, arr] 
          })
          sessionStorage.setItem('FromList', JSON.stringify(FromList))
        }
      
        // 错误提示
        onError = (item, flag) => {
          if((item.value && item.rulesMsg) && (item.rules && item.rulesMsg)){
            if(!flag) Modal.info(item.rulesMsg, 1)
            return item.rulesMsg
          }
        
          if(item.errorMsg){
            if(!flag) Modal.info(item.errorMsg, 1)
            return item.errorMsg
          }else{
            const errorMsg = item.placeholder ? item.placeholder : '请输入' + item.name
            if(!flag) Modal.info(errorMsg, 1)
            return errorMsg
          }
        }
      
        // 改变
        onChange = (e, item, list) => {
          if(item.validate) return;
          if(item.type === 'phone'){
            e = e.replace(/\s*/g,"")
          }
          let isValidate = true
          // 如果是必填且没有规则时，将其判断不能为空，如果有规则，则走向规则
          if(item.required && !item.rules){
            isValidate = e.length === 0 ? false : true;
          }
          if(item.rules) isValidate = item.rules(e)
          list.map(ele => {
            item.name === ele.name ? ele.value = e : ''
            if(item.error !== undefined) item.error = isValidate ?  false : true
          });
          this.setState({
            list
          })
        }
      
        onSubmit = (list) => {
          // 首先判断哪些是必填的
          const res = this.getValidate(list, this.props.form.getFieldsValue());
          if(res.result){
            Modal.info(res.errorMsg, 1)
            return
          }
          this.props.onSubmit ? this.props.onSubmit(this.props.form.getFieldsValue()) : ''
        }
      
        getValidate = (list, form) => {
          let result = false;
          let errorMsg = '';
          for(let i = list.length - 1; i >= 0; i--){
            if(list[i].method === 'picker' || list[i].method === 'date'){
              if(!form[list[i].valueName]){
                result = true;
                errorMsg = '请选择' + list[i].name
              }
            }else if((list[i].method === 'input' || !list[i].method) && (list[i].required || list[i].rules)){
              list[i].error = list[i].error === undefined ? true : list[i].error ? true : false
              if(list[i].error){
                result = true;
                errorMsg = this.onError(list[i], true)
              }
            }
          }
      
          if(result){
            this.setState({
              list
            })
          }
      
          return {
            result,
            errorMsg
          }
        }
      
        onReset = () => {
          const FromList = JSON.parse(sessionStorage.getItem('FromList'));
          let list = this.props.list || listTest
          list.map((item,index) => {
            if(item.method === 'picker' || item.method === 'date'){
              this.props.form.resetFields();
            }else if(item.method === 'input' || !item.method){
              item.value = FromList[index].value
              if(item.error !== undefined) item.error = FromList[index].error
            }
          })
          this.setState({
            list
          })
        }
      
        componentWillUnmount = () => {
          sessionStorage.removeItem('FromList')
        }
      
        render() {
          const Item = List.Item;
          const Brief = Item.Brief;
          const { list } = this.state
          const { form:{getFieldProps}, left, submit ='提交', reset='重置', hidden = false } = this.props;
      
          return (
            <div className="FromList">
              <List>
                {
                  list.map((item, index) => (
                    <div key={index}>
                      {
                        item.method === 'item' ?
                        <Item key={index} extra={item.extra ? item.extra : ''} wrap={item.wrap ? true : false}>
                          {item.name}
                          {
                            item.brief ? <Brief>{item.brief}</Brief> : ''
                          }
                        </Item> :
                        item.method === 'picker' ?
                        <Picker
                          {...getFieldProps(item.valueName,{
                            initialValue: item.value ? item.value : ''
                          })}
                          data={item.data}
                          cols={item.cols ? item.cols : 1}
                          title={item.title ? item.title : ''}
                          extra={item.extra ? item.extra: '请选择'}
                          cascade={item.cascade ? false : true}
                          okText={item.okText ? item.okText: '确定'}
                          dismissText={item.dismissText ? item.dismissText: '确定'}
                        >
                          <Item arrow="horizontal">{item.name}</Item>
                        </Picker>:
                        item.method === 'date' ?
                        <DatePicker
                          {
                            ...getFieldProps(item.valueName, {
                              initialValue: item.value ? item.value : ''
                            })
                          }
                          mode={item.mode ? item.mode : 'date'}
                          title={item.title ? item.title : ''}
                          extra={item.extra ? item.extra: '请选择'}
                          maxDate={item.max ? item.max : false}
                          minDate={item.min ? item.min : false}
                          use12Hours={item.use12Hours ? true : false}
                        >
                          <List.Item arrow="horizontal">{item.name}</List.Item>
                        </DatePicker>:
                        <InputItem
                          {...getFieldProps(item.valueName, {
                            initialValue: item.value ? item.value : '',
                          })}
                          error={item.error ? true : false}
                          onErrorClick={() => this.onError(item)}
                          className={left ? "FromList-Input" : "FromList-Input FromList-Right"}
                          type={item.type ? item.type : 'text'}
                          extra={item.extra ? item.extra : ''}
                          value={item.validate ? item.validate : item.value}
                          onChange={(e)=> Method.Debounce(this.onChange(e, item, list))}
                          placeholder={item.placeholder ? item.placeholder === null ? '': item.placeholder : '请输入' + item.name}
                          editable={item.validate ? false : item.edit ? false : true}
                          disabled={item.disabled ? true : false}
                          clear={item.clear ? false : true}
                          maxLength={item.max ? item.max : ''}
                        >
                          {item.name}
                        </InputItem>
                      }
                      
                    </div>
                  )) 
                }
              </List>
              <Button onClick={() => {this.onSubmit(list)}}>{submit}</Button>
              {
                hidden ? '' : <Button type='default' onClick={() => {this.onReset(list)}}>{reset}</Button>
              }
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
        name: 'left',
        value: '字体向左，只支持Input类型，默认向右'
      },{
        name: 'submit',
        value: '提交按钮文字'
      },{
        name: 'reset',
        value: '重置按钮文字'
      },{
        name: 'hidden',
        value: '隐藏重置按钮'
      },{
        name: 'onSubmit',
        value: '状态提升，如果全部通过校验则会返回值，否则不会'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'list下的公共参数',
    content: [
      {
        name: 'name',
        value: '左边文字（必填）'
      },{
        name: 'itemValue',
        value: '表单的属性值，（必填）'
      },{
        name: 'method',
        value: '方式（不填默认为input）'
      },{
        name: 'extra',
        value: '右边文字'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: '',
    content: '关于这个高阶组件的更多使用，之后会详解',
    method: 'content',
    type: 'red'
  }
]

export default FromIntroduce