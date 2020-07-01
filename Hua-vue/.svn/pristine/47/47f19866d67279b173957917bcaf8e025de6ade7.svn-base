
import request from '@/uilts/request.js'
export function createOd(data){
    return request({
        url:'/hua/order/create',
        method:'post',
        data:data
    })
}
export function fitchDataList(data){
    return request({
        url:'manager/order/list',
        method:'post',
        data:{
            page:1,
            pageSize:1000,
            ...data
        }
    })
}
export function removeData(id){
    return request({
        url:'manager/order/del',
        method:'post',
        data:{ id }
    })
}