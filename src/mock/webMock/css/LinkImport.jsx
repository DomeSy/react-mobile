const Index = [
  {
    title: '',
    content: 'src是指向外部资源的位置，指向的内容会嵌⼊到⽂档中当前标签所在的位置，在请求src资源时会将其指向的资源 下载并应⽤到⽂档内，如js脚本，img图⽚和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处 理，知道将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在底部⽽不是头部。',
    method: 'content',
    type: 'blue'
  },{
    title: '',
    content: 'href是指向⽹络资源所在位置（的超链接），⽤来建⽴和当前元素或⽂档之间的连接，当浏览器识别到它他指向的 ⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。',
    method: 'content',
    type: 'blue'
  }
]

export default Index