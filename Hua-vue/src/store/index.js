import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)
const state = {
    loginStatus:1,  
    userInfo:{},
    cartList:[],
    showAddress:false,
    showPayBox:false,
    ifAddAddress:true,
    searchInput:''
}
const getters ={
    getCartList: state =>{
        return state.cartList  
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})