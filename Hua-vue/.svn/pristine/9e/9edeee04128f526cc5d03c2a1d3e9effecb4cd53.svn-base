
import request from '@/uilts/request.js'
export function getAddressData(data){
    return request({
        url:'/hua/address/list',
        method:'post',
        data:{
            page:1,
            pageSize:100,
            ...data
        }
    })
}
export function defaultAddress(data){
    return request({
        url:'/hua/address/defaultaddress',
        method:'post',
        data:{

            ...data
        }
    })
}
export function insertAddress(data){
    return request({
        url:'/hua/address/insert',
        method:'post',
        data:{

            ...data
        }
    })
}
export function delAddress(data){
    return request({
        url:'/hua/address/del',
        method:'post',
        data:{

            ...data
        }
    })
}
export function updateAddress(data){
    return request({
        url:'/hua/address/set',
        method:'post',
        data:{

            ...data
        }
    })
}