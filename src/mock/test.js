import Mock from 'mockjs'
import url from 'url'
/*
mock.mock()
参数1：请求地址 选填  url
参数2: 请求类型 选填  type
参数3：数据模板 | 函数   
*/
let data = Mock.mock({
    "data|100":[   //意思是data数组中有100条数据
        {  //这个对象是用来写数据模板的
          "id|+1":0,   //初始值是0每次id都+1
          "goodsName":"@ctitle(3, 5)",   //看官网，这个名字是3-5之间的
          "goodsPrice|+1":100,   //这个类似上面的id一个，只是初始值是从100开始的
          "address":"@county(true)",   //这个是地址，@county(true)  对象的属性值都是mock.mock()提供的方法，直接拿过来用就可以了
          "tel":/^1(3|5|7|8|9)\d{9}$/,   //正则写的电话后面1开头，正则不懂自己去学！！！！！！！！！！！很重要
          "goodsImg":"@image('200x100', '#894FC4', '#FFF', 'alley')", // 图片
          "date":'@date("yyyy-MM-dd M:dd:d")',  //时间
          "email":"@email()",  //邮箱
          "name":"@ctitle(10, 30)", //10-30
          "text":"@cparagraph(1, 3)", //备注用
          "img":"@dataImage('200x100', 'Hello')", //图片200*100
          "datetime":'@datetime("yyyy-MM-dd A HH:mm:ss")', //"1974-01-08 PM 23:54:57"
          "string":'@string("lower", 5)', //"string5"
          "array|1-10": [
            {
              "name|+1": [
                "Hello",
                "Mock.js",
                "!"
              ]
            }
          ],//数组中含有数组的
        }
    ],
    code:200,
    message:'请求数据成功'
})
 
// console.log(data,'ddw');//打印这Mock.mock() 赋值的内容，直接在终端运行就 可以了
 
//  .........这个是通过get  拦截的AJAX
Mock.mock(/\goods\/goodsList/,"get",function(options){
    let {limit,page} = url.parse(options.url,true).query;// 解构赋值，结合上面看就懂了
    // return data.data.slice(0,4);//获取0-4条的数据，
    return data.data.slice((page-1)*limit,(limit*page)-1)  //data.data是上面的数据，这里获取的是
})
 
 
export default Mock.mock('/postdata1','post',{
    success: true,
    message: '@cparagraph',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1,
        // 属性 userId 是一个5位的随机码
        'userId|5': '',
    }]
})