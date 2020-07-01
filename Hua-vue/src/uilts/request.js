import axios from 'axios'
import { getToken, getLocalStorage } from '@/uilts/storage.js'
import { Message, Modal, Notice } from 'iview'
import loginTip from '@/components/tip'
// 创建axios实例
const service = axios.create({
    baseURL:'http://localhost:7001',   // api 的 base_url
    timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
      if(!getLocalStorage('userInfo')){
        Modal.confirm({ 
          title:'未登录',
          duration:60,
          closable:true,
          render:(h)=>{
            return h(loginTip,{

            })
          },
          onOk:()=>{
            console.log('onOK')
            window.location.href='//'+window.location.host +'#/login'
          }
        })
        return
      }
      config.headers['hua-token'] = getToken('loginToken')
      config.headers['userid'] = JSON.parse(getLocalStorage('userInfo')).userId || undefined
      
      //不reutrn 则请求不会成功
      return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * 10000 可结合自己业务进行修改
     */
    const res = response.data
    if(response.data.code == 10000) 
    {
        Message.error('登录失效')
        console.log(res,'登录失效')
    }
    if(response.data.code == 30000)
    {
      Modal.confirm({ 
          title:'登录超时',
          duration:60,
          closable:true,
          render:(h)=>{
            return h(loginTip,{

            })
          },
          onOk:()=>{
            console.log('onOK')
            window.location.href='//'+window.location.host +'/#/login'
          }
        })

        console.log(res,'非法篡改，登陆超时')
    }
    return response
  },
  error => {
console.log(error)
  }
)

export default service
