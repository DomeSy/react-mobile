import { DETAILINIT } from '@constants/detail'

const INITIAL_STATE = {
  detail: {},
}

export default function counter (state = INITIAL_STATE, action) {

  switch (action.type) {
    case DETAILINIT: {
      return {
        detail: action.payload
      }
    }
    default:
      return state
  }
}
