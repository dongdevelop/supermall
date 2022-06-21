import {request} from "@/network/request";

export function getHomeMultidata(){
  return request({
    url:'v1.Banner_Api/mmgetBanner'
  })
}