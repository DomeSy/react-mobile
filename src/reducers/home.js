import { HOMEINIT } from '@constants/home'

const INITIAL_STATE = {
  homeList: {},
}

function getData(list){
  let homeList = {};
  list.map(item => {
    homeList[`${item.value}List`] = { ...item }
  })
  return homeList;
}

export default function counter (state = INITIAL_STATE, action) {

  switch (action.type) {
    case HOMEINIT: {
      const homeList = getData(action.payload.data);
      return {
        homeList: {
          ...homeList,
        }
      }
    }
    default:
      return state
  }
}
