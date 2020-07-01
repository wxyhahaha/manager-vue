import request from '@/uilts/request.js'
export function getData(data){
    return request({
        url:'/hua/good/list',
        method:'post',
        data:data
    })
}
//hua/searchGoods
export function searchGoods (data = {}) {
    return request({
        url:'/hua/searchGoods',
        method:'post',
        data:{
            page:1,
            pageSize:1000,
            ...data
        }
    })
}