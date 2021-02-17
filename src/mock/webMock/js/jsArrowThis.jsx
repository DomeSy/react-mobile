const Index = [
  {
    title: '',
    content: '箭头函数不同于传统JavaScript中的函数,箭头函数并没有属于⾃⼰的this,它的所谓的this是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值,并且由于没有属于⾃⼰的this,⽽箭头函数是不会被new调⽤的，这个所谓的this也不会被改变.',
    method: 'content',
    type: 'blue'
  },{
    title: '我们可以⽤Babel理解⼀下箭头函数:',
    content: `
      // ES6
      const obj = {
        getArrow() {
          return () => {
            console.log(this === obj);
          };
        }
      }
    `,
    method: 'edit'
  },{
    title: '转化为ES5:',
    content: `
      // 由 Babel 转译
      var obj = {
        getArrow: function getArrow() {
          var _this = this;
          return function () {
            console.log(_this === obj);
          };
        }
      };
    `,
    method: 'edit'
  }
]

export default Index