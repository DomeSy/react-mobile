import { Method } from '@unilts';

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
    name: '只输入数字（onKeyUp）',
    valueName: 'value13',
    type: 'text',
    onKeyUp: (e) => e.replace(/[^0-9]/g,'')
  },
  {
    name: '是否必填',
    valueName: 'value14',
    value: '',
    type: 'text',
    max: 11,
    required: true
  },
  {
    name: '是否测',
    valueName: 'value15',
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