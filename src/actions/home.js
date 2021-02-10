import { HOMEINIT, HOMEACTIVE } from '@constants/home'
import { reduxRequest } from '@unilts'

export const DHomeInit = (payload) => reduxRequest({
  url: 'homeList',
  type: HOMEINIT,
  cb: res => ({...res, msg: '欢迎来到Domsey'}),
  payload
}) 

export const DHomeActive = (payload) => {
  return {
    type: HOMEACTIVE,
    payload
  }
}