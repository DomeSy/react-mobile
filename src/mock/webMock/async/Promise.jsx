const Promise = [
  {
    title: '',
    content: 'Promise是异步编程中最核心的语法，主要有then、catch、finally、all、race、 resolve、 reject 等方法',
    method: 'content',
    type: 'blue'
  },
  {
    title: 'Promise.prototype.catch()',
    content: [
      'Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。',
      '它的作用是为 Promise 实例添加状态改变时的回调函数。',
      'then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数',
      'then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。如：'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: `
      getJSON("/posts.json").then(function(json) {
        return json.post;
      }).then(function(post) {
        // ...
      }); 
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      '上面的代码使用then方法，依次指定了两个回调函数。',
      '第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。',
      '采用链式的then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。如：'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: `
      getJSON("/post/1.json").then(function(post) {
        return getJSON(post.commentURL);
      }).then(function funcA(comments) {
        console.log("resolved: ", comments);
      }, function funcB(err){
        console.log("rejected: ", err);
      });
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      '上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。',
      '如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB。',
      '如果采用箭头函数，上面的代码可以写得更简洁。',
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: `
      getJSON("/post/1.json").then(
        post => getJSON(post.commentURL)
      ).then(
        comments => console.log("resolved: ", comments),
        err => console.log("rejected: ", err)
      );
    `,
    method: 'edit',
  },{
    title: 'Promise.prototype.catch()',
    content: [
      'Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。如：',
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: `
      getJSON('/posts.json').then(function(posts) {
        // ...
      }).catch(function(error) {
        // 处理 getJSON 和 前一个回调函数运行时发生的错误
        console.log('发生错误！', error);
      });
    `,
    method: 'edit',
  },
  {
    title: '',
    content: [
      'getJSON方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；',
      '如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。',
      'then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'Promise.prototype.finally()',
    content: [
      'finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。如：'
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: '',
    content: `
      promise
      .then(result => {···})
      .catch(error => {···})
      .finally(() => {···});
    `,
    method: 'edit',
  },{
    title: '',
    content: [
      '不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。',
      '下面是一个例子，服务器使用 Promise 处理请求，然后使用finally方法关掉服务器'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      server.listen(port)
      .then(function () {
        // ...
      })
      .finally(server.stop);
    `,
    method: 'edit',
  },{
    title: '',
    content: [
      'finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。',
      '这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。',
      'finally本质上是then方法的特例,如：'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      promise
      .finally(() => {
        // 语句
      });
      
      // 等同于
      promise
      .then(
        result => {
          // 语句
          return result;
        },
        error => {
          // 语句
          throw error;
        }
      );
    `,
    method: 'edit',
  },{
    title: '',
    content: [
      '上面代码中，如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。有了finally方法，则只需要写一次。它的实现也很简单。',
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      Promise.prototype.finally = function (callback) {
        let P = this.constructor;
        return this.then(
          value  => P.resolve(callback()).then(() => value),
          reason => P.resolve(callback()).then(() => { throw reason })
        );
      };
    `,
    method: 'edit',
    copy:true
  },{
    title: '',
    content: [
      '不管前面的 Promise 是fulfilled还是rejected，都会执行回调函数callback。',
      '从上面的实现还可以看到，finally方法总是会返回原来的值'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      // resolve 的值是 undefined
      Promise.resolve(2).then(() => {}, () => {});
      
      // resolve 的值是 2
      Promise.resolve(2).finally(() => {});
      
      // reject 的值是 undefined
      Promise.reject(3).then(() => {}, () => {});
      
      // reject 的值是 3
      Promise.reject(3).finally(() => {})
    `,
    method: 'edit'
  },{
    title: 'Promise.all():',
    content: [
      'Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。',
      '用法：const p = Promise.all([p1, p2, p3]);',
      'Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）',
      `p的状态由p1、p2、p3决定，分成两种情况。
      a.只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
      b.只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。`
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      // 生成一个Promise对象的数组
      const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
        return getJSON('/post/' + id + ".json");
      });
      
      Promise.all(promises).then(function (posts) {
        // ...
      }).catch(function(reason){
        // ...
      });
    `,
    method: 'edit',
  },{
    content: '注：promises是包含 6 个 Promise 实例的数组，只有这 6 个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。',
    method: 'content',
    type: 'red'
  },{
    title: 'Promise.race()',
    content: [
      'Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例',
      '用法：const p = Promise.race([p1, p2, p3]);',
      '只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。',
      'Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。',
      '下面是一个例子，如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      const p = Promise.race([
        fetch('/resource-that-may-take-a-while'),
        new Promise(function (resolve, reject) {
          setTimeout(() => reject(new Error('request timeout')), 5000)
        })
      ]);
      
      p
      .then(console.log)
      .catch(console.error);
    `,
    method: 'edit',
  },{
    title: '',
    content: [
      '上面代码中，如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。',
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: 'Promise.resolve()',
    content: [
      '有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。',
      `用法：const jsPromise = Promise.resolve($.ajax('/whatever.json'));`,
      '注：将 jQuery 生成的deferred对象，转为一个新的 Promise 对象。',
      'Promise.resolve等价于下面的写法。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      Promise.resolve('foo')
      // 等价于
      new Promise(resolve => resolve('foo'))
    `,
    method: 'edit',
  },{
    title: 'Promise.resolve方法的参数分成四种情况。',
    content: [
      '如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。',
      '参数是一个thenable对象',
      '参数不是具有then方法的对象，或根本就不是对象',
      '不带有任何参数',
    ],
    method: 'content',
    type: 'listAll'
  },
  {
    title: 'Promise.reject()',
    content: [
      'Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。如：'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      const p = Promise.reject('出错了');
      // 等同于
      const p = new Promise((resolve, reject) => reject('出错了'))
      
      p.then(null, function (s) {
        console.log(s)
      });
      // 出错了
    `,
    method: 'edit',
    copy:true
  }, {
    title: '',
    content: [
      '上述代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。',
      'Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      const thenable = {
        then(resolve, reject) {
          reject('出错了');
        }
      };
      
      Promise.reject(thenable)
      .catch(e => {
        console.log(e === thenable)
      })
      // true
    `,
    method: 'edit',
  },{
    title: '',
    content: [
      '上面代码中，Promise.reject方法的参数是一个thenable对象，执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '加载图片',
    content: '我们可以将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化',
    method: 'content',
  },{
    title: '',
    content: `
      const preloadImage = function (path) {
        return new Promise(function (resolve, reject) {
          const image = new Image();
          image.onload  = resolve;
          image.onerror = reject;
          image.src = path;
        });
      };
    `,
    method: 'edit',
    copy: true
  }
  
]

export default Promise