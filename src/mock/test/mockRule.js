// 文档地址https://github.com/nuysoft/Mock/wiki/Date
// 数据模板 ==> 规则（）

import Mock from 'mockjs'
// import url from 'url'
/*
mock.mock()
参数1：请求地址 选填  url
参数2: 请求类型 选填  type
参数3：数据模板 | 函数   
*/


/*
  数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
  属性名 和 生成规则 之间用竖线 | 分隔。
  生成规则 是可选的。
  'name|min-max': value
  'name|count': value
  'name|+step': value
  'name|min-max.dmin-dmax': value
  'name|min-max.dcount': value
  'name|count.dmin-dmax': value
  'name|count.dcount': value

  生成规则：
    a. min-max
    b. count
    c. +step
    d. min-max.dmin-dmax
    e. min-max.dcount
    f. count.dmin-dmax
    g. count.dcount

  属性值：
    
    1> String(a,b)
      "string1|1-10": "测试" : 通过重复 测试 生成一个字符串，重复次数大于等于 1，小于等于 10
      "string2|4": '测试' : 通过重复 测试 生成一个字符串，重复次数等于 count。
  
    2>Number(c, a, d)
      number1|+1:  2  属性值自动加 1，初始值为 2
      number2|1-10: 3  生成一个大于等于 1、小于等于 10 的整数，属性值 3 只是用来确定类型。
      number3|1-5.2-10: 3 生成一个浮点数，整数部分大于等于1小于等于5，小数部分大于等于2小于等于10 ，属性值 3 只是用来确定类型。

    3>Boolean(a,b)
      'Boolean1|1': false  随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。(1是固定，其他数字也一样)
      'Boolean2|1-3': false  值为 false 的概率是 1/(1+3) 即 1/4，值为true的概率是 3/(1+3) 即 1/4

    4>Object(a, b)
      'OBject1|4': {} 从属性值 object 中随机选取 4 个属性, 如果本身并没有4个属性则会只显示4个属性
      'OBject2|1-4': {}从属性值 object 中随机选取 1-4 个属性
    
    5>Array(b, c, a)
      "Array1|1": [1, 2, 3, 4, 5, 6]  当为1时是在数组中1，2，3，4，5，6中随机选取一个数
      "Array2|2": [1, 2, 3, 4, 5, 6]  当不为1时，则是复制数据 也就是为2时，新数组是[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
      "Array3|+2": [1, 2, 3, 4, 5, 6] 从数组中随机选取一位作为基数，然后依次+2，如选中时3，第一次值为3，第二次值为2 + 3 = >5
      "Array4|1-4": [1, 2, 3, 4, 5, 6], 复制数组，复制次数是1~4次
    
    6>fn(不能使用规则)
      "fn": () => {
          return 3
        }
      其返回值作为最终的属性值

    7> RegExp(根据正则匹配)
        正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
      
*/

let data = Mock.mock({
  "data|2":[   
      {  
        "string1|1-10": "字符串",
        "string2|4": '字符串',
        "number1|+1": 2,
        "number2|1-10": 3,
        "number3|1-5.2-10": 3,
        'Boolean1|1': false,
        'Boolean2|1-3': false,
        'OBject1|4': {
          test: '000',
          test1: '111',
          test2: '222',
          test3: '333',
          test4: '444',
          test5: '555',
          test6: '666',
          test7: '777',
        },
        'OBject2|1-4': {
          test: '000',
          test1: '111',
          test2: '222',
          test3: '333',
          test4: '444',
          test5: '555',
          test6: '666',
          test7: '777',
        },
        "Array1|1": [1, 2, 3, 4, 5, 6],
        "Array2|2": [1, 2, 3, 4, 5, 6],
        "Array3|+2": [1, 2, 3, 4, 5, 6],
        "Array4|1-4": [1, 2, 3, 4, 5, 6],
        "fn": () => {
          return 3
        },
        'regexp1': /[a-z][A-Z][0-9]/,
        'regexp2': /\w\W\s\S\d\D/,
        'regexp3': /\d{5,10}/,
      }
  ],
  code:200,
  message:'请求数据成功'
})
 
 