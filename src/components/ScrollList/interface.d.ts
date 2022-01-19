
export interface IndexProps {
  onRequest:any; //请求接口
  payload?: PayloadProps; //请求参数，需要将页数，第几页分开写
  calcData?: () => {}; // 其余参数
  childrenNode: (data:any) => React.ReactNode; //列表渲染的节点，data 包含两个字段，list 为每次返回列表的总和，使用这个数据渲染，res为每次请求后除list的字段
  LoadingNode?: React.ReactNode; //加载时的样式
  NoneNode?: React.ReactNode; // 加载完成时的样式
  threshold?: number; //触发加载事件的滚动触底距离阈值 单位为像素 默认 250
  wait?: number; //等待时间，如果接口速度较慢时，可设置为0， 默认为 1000 ms
}

interface PayloadProps{
  pageName?: string; // 接口页数的字段，默认 page
  sizeName?: string; // 一页数量的名字，默认为 pageSize
  sizeNumber?: number; // 一页数量，默认为 10
  all?: string; //接口返回总数的字段 默认 all
  list?: string; //接口返回总数的列表的字段 默认为 list
}

