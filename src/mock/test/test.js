import { options } from 'marked';
import Mock from 'mockjs'
import url from 'url'

// import homeList from './home/homeList';

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


Mock.mock('/api/goodslist', 'get', {
  status: 200,
  message: '获取商品列表成功',
  'data|5-10': [{ // 5-10随机生成5~10个数据
    'id|+1': 0,
    name: '@cword(2,3)', // 生成中文汉字，word生成英文汉字
    price: 10,
    count: 200,
    img: 'https://raw.githubusercontent.com/moon-ice/Typora-source/master/typora202005/15/163649-643563.png'
  }]
})
 
Mock.mock(/\goods\/goodsList/,"get",function(options){
    let {limit,page} = url.parse(options.url, true).query;// 解构赋值，结合上面看就懂了
    // return data.data.slice(0,4);//获取0-4条的数据，
    return data.data.slice((page-1)*limit,(limit*page)-1)  //data.data是上面的数据，这里获取的是
})
 
 
// export default Mock.mock('/postdata1','post',{
//     success: true,
//     message: '@cparagraph',
//     // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
//     'list|1-5': [{
//         // 属性 sid 是一个自增数，起始值为 1，每次增 1
//         'sid|+1': 1,
//         // 属性 userId 是一个5位的随机码
//         'userId|5': '',
//     }]
// })
// eslint-disable