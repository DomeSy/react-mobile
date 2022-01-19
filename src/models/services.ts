import { Axios } from "@/utils"

export async function getList(payload:any) {
  return await Axios({}, {url: payload.data})
}