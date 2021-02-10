import { HOMEINIT, HOMEACTIVE } from '@constants/home'

const INITIAL_STATE = {
  homeList: {},
  homeActive: {}
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
          ...state
        }
      }
    }
    case HOMEACTIVE: {
      const { homeList } = state;
      const homeActive = Object.values(homeList).filter(item => item.title === action.payload);
      return {
        homeActive: homeActive[0],
        ...state
      }
    }
    default:
      return state
  }
}
