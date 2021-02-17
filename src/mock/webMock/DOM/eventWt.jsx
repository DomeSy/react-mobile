const Index = [
  {
    title: '',
    content: '事件委托就是利⽤事件冒泡，只指定⼀个事件处理程序，就可以管理某⼀类型的所有事件.',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: [
      '在绑定⼤量事件的时候往往选择事件委托。'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '',
    content: `
      <ul id="parent">
        <li class="child">one</li>
        <li class="child">two</li>
        <li class="child">three</li>
        ...
      </ul>
      <script type="text/javascript"> 
        //⽗元素
        var dom= document.getElementById('parent');
        //⽗元素绑定事件，代理⼦元素的点击事件
        dom.onclick= function(event) {
          var event= event || window.event;
          var curTarget= event.target || event.srcElement;
          if (curTarget.tagName.toLowerCase() == 'li') {
            //事件处理
          }
        }
      </script>
    `,
    method: 'edit'
  },{
    title: '优点',
    content: [
      '节省内存占⽤，减少事件注册',
      '新增⼦对象时⽆需再次对其绑定事件，适合动态添加元素'
    ],
    method: 'content',
    type: 'listAll'
  },{
    title: '局限性',
    content: [
      'focus、blur 之类的事件本身没有事件冒泡机制，所以⽆法委托',
      'mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗⾼，不适 合事件委托'
    ],
    method: 'content',
    type: 'listAll'
  }
]

export default Index