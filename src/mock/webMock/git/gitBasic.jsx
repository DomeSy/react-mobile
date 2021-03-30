const Index = [
  {
    title: '',
    content: 'git基础设置',
    method: 'content',
    type: 'blue'
  },{
    title: 'Git设置',
    content: [
      {
        name: '设置邮箱',
        value: 'git config --global user.email "1*******3@qq.com"(邮箱)'
      },{
        name: '设置用户名',
        value: 'git config --global user.name "Domesy"'
      },{
        name: '查看状态',
        value: 'git config --global -l'
      }
    ],
    method: 'content',
    type: 'list',
  },{
    title: 'Git基础命令',
    content: [
      {
        name: 'git init',
        value: '初始化创建一个仓库。会创建出一个隐藏的.git 文件夹，所有的操作历史将存入这里'
      },{
        name: 'git status',
        value: '查看当前仓库所在目录的文件状态.modified：已修改 Untracked：未追踪的'
      },{
        name: 'git add 文件名',
        value: '使文件加入追踪状态'
      },{
        name: 'git commit',
        value: '提交（进入vim模式）'
      },{
        name: "git commit -m “文件描述”",
        value: '合并，不用进入vim模式'
      },{
        name: "git commit -a -m “文件描述”",
        value: '合并加入追踪模式. 但必须注意该文件必须县加入追踪状态，否则不能用'
      },{
        name: "git log",
        value: '查看提交记录'
      },{
        name: "git config --global corequotepath false",
        value: '文件名乱码'
      }
    ],
    method: 'content',
    type: 'list',
  },{
    title: 'Git设置',
    content: [
      {
        name: '设置邮箱',
        value: 'git config --global user.email "1*******3@qq.com"(邮箱)'
      },{
        name: '设置用户名',
        value: 'git config --global user.name "Domesy"'
      },{
        name: '查看状态',
        value: 'git config --global -l'
      }
    ],
    method: 'content',
    type: 'list',
  }
]

export default Index