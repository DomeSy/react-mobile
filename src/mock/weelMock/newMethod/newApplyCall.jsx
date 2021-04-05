const Index = [
  {
    title: '',
    content: 'call和apply用法十分相似',
    method: 'content',
    type: 'blue'
  },
  {
    title: '',
    content: '使用 call() 方法，可以编写能够在不同对象上使用的方法。',
    method: 'content',
    type: 'blue'
  },
  {
    title: '',
    content: '通过 apply() 方法，能够编写用于不同对象的方法。',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'call()',
    content:  `
      const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      const person1 = {
        firstName:"Bill",
        lastName: "Gates"
      }
      const result = person.fullName.call(person1);
      console.log(result)
      // Bill Gates
    `,
    method: 'edit',
  },
  {
    title: 'apply()',
    content:  `
      const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      const person1 = {
        firstName:"Bill",
        lastName: "Gates"
      }
      const result = person.fullName.apply(person1);
      console.log(result)
      // Bill Gates
    `,
    method: 'edit',
  },
  {
    title: 'call() 和 apply() 之间的区别',
    content: [
      'call() 方法分别接受参数',
      'apply() 方法接受数组形式的参数。',
      '如果要使用数组而不是参数列表，则 apply() 方法非常方便。'
    ],
    method: 'content',
    type: 'listAll'
  },
]

export default Index