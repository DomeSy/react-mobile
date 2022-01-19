import Mock from 'mockjs';

const List = (param) => {
  
  const all = 73
  const page = Number(param?.page) || 1
  const size = Number(param?.size) || 10

  const max = Math.floor(all / size)

  let res = []
  if(page <= max){
    for(let i = 0; i < size; i++){
      res = [...res, { name: Mock.mock('@cname') }]
    }
  }else if(page === max + 1){
    for(let i = 0; i < all % size; i++){
      res = [...res, { name: Mock.mock('@cname') }]
    }
  }

  return {
    list: res,
    all
  }
}

export default List