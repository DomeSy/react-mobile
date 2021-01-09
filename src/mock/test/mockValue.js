// 文档地址https://github.com/nuysoft/Mock/wiki/Date
// 数据模板 ==> 值（）
import Mock from 'mockjs'

/*
  文档地址https://github.com/nuysoft/Mock/wiki/Date
  值随机生成
  
  地区（中国）
    大区: @region()  =>  华东
    省: @province()  =>  江苏省  省市区可为true能展示上级的地市
    市: @city()  => 南京市
    县: @county()  => 栖霞区
    邮政编码: @zip()  => 772012

  时间(具体看文档)
    日期字符串: @date('yyyy-MM-dd') => “2002-10-23" 
    时间字符串: @time('HH:mm:ss') =>  "03:57:53" 
    日期和时间字符串: @datetime('yyyy-MM-dd HH:mm:ss') => 2012-02-06 03:15:40
 
  姓名
    常见的英文名: @first()
    常见的英文姓: @last()
    常见的英文姓名 @name()  => Larry Wilson 为true时 =>Helen Carol Martinez
    常见的中文名: @cfirst()
    常见的中文姓: @clast()
    常见的中文姓名: @cname()

  文字（用于生成随机中文字）
    英文标题 @title(1, 7)  随机1-7位 Tkqi Bmdeih Wwrtte Wvkjue Yhe
    中文标题 @ctitle(1, 7)  随机1-7位  便速处属争

  颜色
    @color()  =>  #3538B2
    @rgb()  =>  rgb(242, 198, 121)
    带有透明 @rgba()  => rgba(242, 198, 121, 0.13)

  常用：
    身份证号: @id() => 420000200710091854
    邮箱: @email()
    图片: @dataImage('200x100', 'Hello') ==> 200 * 100的格式 
    电话: /^1(3|5|7|8|9)\d{9}$/
*/


let data = Mock.mock({
    "data|2":[   
        {  
          region: '@region()',
          province: '@province()',
          city: '@city()',
          county: '@county()',
          zip: '@zip()',
          date: "@date('yyyy-MM-dd')",
          time: "@time('HH:mm:ss')",
          datetime: "@datetime('yyyy-MM-dd HH:mm:ss')",
          now: "@now('unit')",
          first: '@first()',
          last: '@last()',
          name: '@name()',
          cfirst: '@cfirst()',
          clast: '@clast()',
          cname: '@cname()',
          title: '@title()',
          ctitle: '@ctitle()',
          color: '@color()',
          rgb: '@rgb()',
          rgba: '@rgba()',
          id: '@id()',
          email: '@email()',
          dataImage: "@dataImage('200x100', 'Hello')",
          tel: /^1(3|5|7|8|9)\d{9}$/,
          // city: '@city()',
        }
    ],
    code:200,
    message:'请求数据成功'
})
 
console.log(data);
 
