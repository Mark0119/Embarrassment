// /topicclass
import {REQUEST} from '@/assets/axios/REQUEST.js'
const API=new REQUEST


export function CircleTopicclass(){
  return API.request_promise({
    url:'/topicclass',
    method:'GET'
  })
}