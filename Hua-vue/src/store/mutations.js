import { ADD_CART, INIT_CART, DEL_CART, EIDT_CART, SHOW_ADDRESSBOX, SHOW_PAYBOX, ADD_ADDRESS, UPDATE_ADDRESS, GET_SEARCHINPUT} from './mutation-types'
import { setLocalStorage, getLocalStorage } from '@/uilts/storage'
export default{
    [ADD_CART] (state,{goodsID,goodsPrice, goodsName, goodsImg, goodsNum}) {
        let cart = state.cartList
        let goodsInfo = {
            goodsID,
            goodsPrice, 
            goodsName, 
            goodsImg,
            goodsNum
        }
        let flag = true
        if(cart.length){
            cart.forEach(el => {
                if(el.goodsID == goodsInfo.goodsID){
                    flag = false
                    el.goodsNum += goodsInfo.goodsNum
                }
            })
        }
        if(!cart.length || flag ){
            cart.push(goodsInfo)
        }

        state.cartList = cart
        setLocalStorage('cartList', cart)
    },
    [GET_SEARCHINPUT] (state,data) {
        state.searchInput = data
    },
    [INIT_CART] (state,name) {
        console.log('sdasdsad',name)
        let cartList = []
        if(getLocalStorage(name)) cartList = JSON.parse([getLocalStorage(name)])

        state.cartList = cartList
    },
    [DEL_CART](state,goodsID){
        let cart = state.cartList
        let newCart = []
        if(goodsID instanceof Array){
            newCart = []
        }
        else{
            newCart = cart.filter(el => {
                if(el.goodsID != goodsID){
                    return true
                }
            });
        }

        state.cartList = newCart
        setLocalStorage('cartList',newCart)
    },
    [EIDT_CART](state,{ goodsNum, goodsID }){
        let cartList = state.cartList
        cartList && cartList.forEach(el => {
            if(el.goodsID == goodsID){
                el.goodsNum = goodsNum
            }
        });
        state.cartList = cartList
        setLocalStorage('cartList', cartList)
    },
    [SHOW_ADDRESSBOX](state,isShow){
        state.showAddress = !isShow
    },
    [SHOW_PAYBOX](state,isShow){
        state.showPayBox = !isShow
    },
    [ADD_ADDRESS](state){
        state.ifAddAddress = true
        console.log(state.ifAddAddress)
    },
    [UPDATE_ADDRESS](state){
        state.ifAddAddress = false
        console.log(state.ifAddAddress)
    }
}
