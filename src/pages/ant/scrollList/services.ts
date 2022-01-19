import { Axios } from "@/utils"

export async function getScrollList(param:any) {
  return await Axios(param, {url: 'ant/scrollList'})
}