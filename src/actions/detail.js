import { DETAILINIT } from '@constants/detail'
import { reduxRequest } from '@unilts'

export const DDetailInit = (payload) => reduxRequest({
  url: payload.url,
  type: DETAILINIT,
  cb: res => ({...res, name: payload.data}),
  payload: {
    data: payload.data
  }
})