const Accordion = [
  {
    title: '',
    content: '制作二维码',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: '二维码制作',
    method: 'content',
  },
  {
    title: '效果展示',
    content: 'Qrcode',
    method: 'component'
  },
  {
    title: '完整代码',
    content:  `
      function Index({value = 'http://www.domesy.cn/#/',size = 200, bgColor="#FFFFFF", fgColor="#000000",  level="H", logo = false, logoSize = 3}) {
        return (
          <div className="Qrcode">
          <QRCode
            value={value}
            size={size}
            bgColor={bgColor}
            level={level}
            fgColor={fgColor}
            imageSettings={logo ? {src: logo,height:size/logoSize,width:size/logoSize} : undefined}
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
        name: 'value',
        value: '二维码的链接'
      },{
        name: 'size',
        value: 'Number 二维码的宽高，默认200'
      },{
        name: 'level',
        value: '等级 H L M S'
      },{
        name: 'bgColor',
        value: '二维码的背景颜色'
      },{
        name: 'fgColor',
        value: '二维码的颜色'
      },{
        name: 'logo',
        value: '中间的logo'
      },{
        name: 'logoSize',
        value: 'size / logoSize 的值'
      }
    ],
    method: 'content',
    type: 'list'
  },
]

export default Accordion