// /postclass
import {REQUEST} from '@/assets/axios/REQUEST.js'
const API=new REQUEST

export function IndexPostclass(){
  return API.request_promise({
    url:'/postclass',
    method:'GET'
  })
}
// 列表
export function IndexPostList(){
  return API.request_promise({
    url:'/postclass/1/post/1',
    method:'GET'
  })
}