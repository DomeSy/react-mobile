import Mock from 'mockjs'
import url from 'url'

let data = Mock.mock({
    "data|2":[   
        {  
          "id|+1":0,   //id:初始化，
          "name":"@ctitle(3, 5)",  // @ctitle(3,5): 随机3-5个中文字
          "address":"@county(1)"

        }
    ],
    code:200,
    message:'请求数据成功'
})
 
console.log(data);
 
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