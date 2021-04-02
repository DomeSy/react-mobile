const Index = [
  {
    title: '',
    content: '数组去重，实际中基本不会遇到，一般而言是面试的时候才会用到',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: '大多数方法是无法去重对象的，和NaN',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'ES6 Set去重（ES6中最常用）',
    content:  `
      const ArrayUnique = (arr = []) => {
        return Array.from(new Set(arr))
      }

      const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
     
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]'
      },
      {
        name: '优点',
        value: '不考虑兼容性，这种去重的方法代码最少'
      },
      {
        name: '缺点',
        value: '这种方法还无法去掉“{}”空对象'
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'indexOf去重',
    content:  `
      const ArrayUnique = (arr = []) => {
        if (!Array.isArray(arr)) {
            console.log('type error!')
            return
        }
        var array = [];
        for (var i = 0; i < arr.length; i++) {
            if (array .indexOf(arr[i]) === -1) {
                array .push(arr[i])
            }
        }
        return array;
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}] '
      },
      {
        name: '思路',
        value: '新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组'
      },
      {
        name: '缺点',
        value: 'NaN、{}没有去重'
      }
    ],
    method: 'content',
    type: 'list'
  }, 
  {
    title: '利用for嵌套for，然后splice去重（ES5中最常用）',
    content:  `
      const ArrayUnique = (arr = []) => {
        for(var i=0; i<arr.length; i++){
          for(var j=i+1; j<arr.length; j++){
              if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                  arr.splice(j,1);
                  j--;
              }
          }
        }
        return arr;
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]  '
      },
      {
        name: '思路',
        value: '双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值'
      },
      {
        name: '缺点',
        value: 'NaN和{}没有去重，两个null直接消失了'
      }
    ],
    method: 'content',
    type: 'list'
  }, {
    title: 'sort()',
    content:  `
      const ArrayUnique = (arr = []) => {
        if (!Array.isArray(arr)) {
          console.log('type error!')
          return;
        }
        arr = arr.sort()
        var arrry= [arr[0]];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[i-1]) {
                arrry.push(arr[i]);
            }
        }
        return arrry;
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]  '
      },
      {
        name: '思路',
        value: '利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对'
      },
      {
        name: '缺点',
        value: 'NaN、{}没有去重'
      }
    ],
    method: 'content',
    type: 'list'
  }, {
    title: '利用includes',
    content:  `
      const ArrayUnique = (arr = []) => {
        if (!Array.isArray(arr)) {
          console.log('type error!')
          return
        }
        var array =[];
        for(var i = 0; i < arr.length; i++) {
                if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                        array.push(arr[i]);
                  }
        }
        return array
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]'
      },
      {
        name: '思路',
        value: '新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组'
      },
      {
        name: '缺点',
        value: '{}没有去重 '
      }
    ],
    method: 'content',
    type: 'list'
  },
  {
    title: 'hasOwnProperty',
    content:  `
      const ArrayUnique = (arr = []) => {
        var obj = {};
        return arr.filter(function(item, index, arr){
            return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
        })
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]'
      },
      {
        name: '思路',
        value: '利用hasOwnProperty 判断是否存在对象属性'
      },
      {
        name: '优点',
        value: '所有的都去重了'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '利用filter',
    content:  `
      const ArrayUnique = (arr = []) => {
        return arr.filter(function(item, index, arr) {
          //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
          return arr.indexOf(item, 0) === index;
        });
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '利用递归去重',
    content:  `
      const ArrayUnique = (arr = []) => {
        var array= arr;
        var len = array.length;

          array.sort(function(a,b){   //排序后更加方便去重
              return a - b;
          })

          function loop(index){
              if(index >= 1){
                  if(array[index] === array[index-1]){
                      array.splice(index,1);
                  }
                  loop(index - 1);    //递归loop，然后数组去重
              }
          }
          loop(len-1);
          return array;
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]'
      },
      {
        name: '思路',
        value: '利用hasOwnProperty 判断是否存在对象属性'
      },
      {
        name: '优点',
        value: '所有的都去重了'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: '利用Map数据结构去重',
    content:  `
      const ArrayUnique = (arr = []) => {
        let map = new Map();
        let array = new Array();  // 数组用于返回结果
        for (let i = 0; i < arr.length; i++) {
          if(map .has(arr[i])) {  // 如果有该key值
            map .set(arr[i], true); 
          } else { 
            map .set(arr[i], false);   // 如果没有该key值
            array .push(arr[i]);
          }
        } 
        return array ;
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]'
      },
      {
        name: '思路',
        value: '创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。'
      }
    ],
    method: 'content',
    type: 'list'
  },{
    title: 'reduce+includes',
    content:  `
      const ArrayUnique = (arr = []) => {
        return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);;
      }
      Method.ArrayUnique(arr)
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: [
      {
        name: '结果',
        value: '[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]'
      }
    ],
    method: 'content',
    type: 'list'
  }
]

export default Index