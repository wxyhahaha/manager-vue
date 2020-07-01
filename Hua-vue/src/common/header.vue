<template>
    <div class="header">
        <header>
            <nav id="nav" :class="nav_style">
                <div  class="nav_left">
                    <span class="login_logo" @click="tohome">
                        <i>Hua</i>
                    </span>
                </div>
                <div class="nav_right">
                    <div class="searchBox">
                        <Input search size="large" v-model='inputData' @on-keyup="getSearchData" @on-focus="searchInput1" @on-blur='searchInput1' placeholder="输入想要的鲜花..." />
                        <transition name="search_fade">
                            <div class="search_his_link" v-if="ifSearch">
                                <div>
                                    <h4>历史纪录</h4>
                                    <div class="history_content">
                                        <span title="找你一下">找你一下</span>
                                        <span>sw</span>
                                        <span title="找你一阿瑟东撒下"> 一阿瑟东撒下</span>
                                        <span>找你豆粉下</span>
                                                    <span title="找你一阿瑟东撒下"> 找你一阿瑟下</span>
                                        <span>找你一24下</span>          
                                        <span title="找你一阿瑟东撒下"> 找你一阿瑟东撒下</span>
                                        <span>找粉下</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4>你可能要搜的商品</h4>
                                    <div class="link_content">
                                        <span>找你一下</span>
                                        <span>找你一下</span>
                                        <span>找你asdsadsad下</span>
                                    </div>
                                </div>
                            </div>
                        </transition>  

                    </div>                    
                    <div class="nav_moreInfo">
                        <a href="" class="a_allGoods">全部商品</a>
                        <span class="spread"></span>
                        <div class="perBox">
                            <Icon class="md-person" style="cursor: pointer;" type="md-person" size="25" color='#808695'/>
                            <div class="perBox_person">
                                <span  @click="toPerCenter">我的订单</span>
                                <span @click="$router.push('/login')">切换账号</span>
                            </div>
                        </div> 
                        
                        <div class="cartBox">
                            <Icon class="md-cart" type="md-cart" size="25" color='#808695'/>
                            <div class="small_car_circle">
                                {{totalNum}}
                            <div :class="cart_style">
                                <div v-if="cartList.length  == 0">
                                    购物车竟然是空的
                                </div>
                                    <ul class="cart_ul">
                                        <li v-for="item in cartList " :key="item.goodsID" @click="toDetail(item.goodsID)">
                                            <div class="cart_content_left">
                                                <img :src="item.goodsImg" alt="">
                                            </div> 
                                            <div class="cart_content_right">
                                                    <h4>{{item.goodsName}}</h4>
                                                    <div>
                                                        <span class="cart_good_price">￥{{item.goodsPrice}}</span>
                                                        <span class="cart_good_num">x{{item.goodsNum}}</span>
                                                    </div>                                
                                            </div>
                                            <Icon type="md-close-circle"  class="delcart" size="20" @click.stop="delGood(item.goodsID)"/>
                                        </li>
                                    </ul>
                                    <div class="cart_Box_bottom" v-if="cartList.length  != 0">
                                        <div>
                                            <span>共{{totalNum}}个商品</span>
                                            <span>共计:<span class="cart_bottom_price">{{totalPrice.toFixed(2)}}￥</span></span>
                                        </div>
                                        <div>
                                            <Button type="primary" @click="toCart">去购物车</Button>
                                        </div>
                                    </div>
                            </div>                                 
                            </div>
                        </div>                        
                    </div>
                </div>
           
            </nav>
        </header>
        <div class="nav2">
            <div class="nav2_wrapper">
                <ul>
                    <li><a @click.prevent="tohome">首页</a></li>
                    <li><a href="javascipt:;" @click.prevent="togoods">全部</a></li>
                    <li><a href="javascipt:;" @click.prevent="togoods">鲜花</a></li>
                    <li><a href="javascipt:;" @click.prevent="togoods">永生花</a></li>
                    <li><a href="javascipt:;" @click.prevent="togoods">礼品</a></li>
                    <li><a href="javascipt:;" @click.prevent="togoods">花语大全</a></li>     
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { getLocalStorage } from '@/uilts/storage'
import { createClient } from 'http';
import { searchGoods } from '@/api/good'
let timeout = ''
export default {
    data(){
        return{
            nav_style:{
                nav:true,
                fixpos:false,
            },
            ifSearch:false,
            inputData:'',
            showperBox:false
        }
    },
    computed:{
        ...mapState(['loginStatus','cartList','searchInput']),
        totalPrice(){
            let totalPrice = 0
            this.cartList && this.cartList.forEach(el=>{
                totalPrice +=( el.goodsNum * el.goodsPrice )
            })
            return totalPrice
        },
        totalNum(){
            let totalNum = 0
            this.cartList && this.cartList.forEach(el=>{
                totalNum += el.goodsNum
            })
            return totalNum            
        },
        cart_style(){
            if(this.cartList.length == 0) return  {'cart_content_Box':true,'cart_minheight':true }
            else{  return  {'cart_content_Box':true,'cart_minheight':false }  }
        }
    },
    mounted(){
        
        this.INIT_CART('cartList')
        window.addEventListener('scroll',this.headSroll)
    },
    methods:{
        ...mapMutations(['INIT_CART','DEL_CART','GET_SEARCHINPUT']),
        headSroll(){
            
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let scrollObj = document.getElementById('nav')
            let objHeight = scrollObj.offsetHeight
            if(scrollTop >= objHeight){
                this.nav_style.fixpos = true
            }else{
                this.nav_style.fixpos = false
            }
        },
        delGood(goodsID){
            this.DEL_CART(goodsID)
        },
        toDetail(goodsID){
            
             window.open('//'+window.location.host +'/#/good/goodsdetali?goodsID=' + goodsID)
        },
        toPerCenter(){
            this.$router.push('/percenter')
        },
        toCart(){
            this.$router.push('/cartlist')
        },
        tohome(){
            this.$router.push('/')
        },
        togoods(){
            this.$router.push('/good')
        },
        searchInput1(){
            this.ifSearch = !this.ifSearch          
        },
        getSearchData () {
            let goodsName = this.inputData
            this.GET_SEARCHINPUT(goodsName)
            this.$router.push(`/good`)
            // clearTimeout(timeout)
            // timeout = setTimeout(() => {
            // let goodsName = this.inputData
            // searchGoods({goodsName}).then(res=>{
            //         console.log(res)
            //      })
            // }, 1000);
        },
        tip(){
             this.$Notice.info({
                title:'温馨提醒',
                desc:'这个功能也还没做哦~,这个没问题的，相信我'
            })           
        }
    }
}
</script>
<style>
header{
    /* margin-bottom: 20px; */
    width: 100%;
    height: 96px;
    background: #1a1a1a;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


}
.header{
    margin: 0 auto 20px;
    min-width: 1200px;
    width: 100%;
}
.nav{
    width: 1200px;
    height: 96px;
    padding: 0 20px;
     transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
}
.fixpos{
    position:fixed;
    background:  linear-gradient(#f7f7f7,#fbfbfb);
    box-shadow: 0 3px 10px rgba(0,0,0,.1);
    width: 100%;
    height: 78px;
    top: -78px;
    left: 0;
    transform: translateY(100%)
}
.nav>div{
    display: flex;

}
.searchBox{
    width: 350px;
    margin-right: 50px;
    position: relative;
}
.search_his_link{
    position: absolute;
    bottom: -2px;
    transform: translateY(100%);
    left:0;
    border: 1px solid #dcdee2;
    border-top: none;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    width: 350px;
    max-height: 150px;
    border-radius: 4px;
    padding: 20px 10px;
    background-color: #fff;
    display:flex;
    overflow: auto;
}
.search_his_link>div{
    flex:1
}
.search_his_link h4{
    margin-bottom: 10px;
}
.history_content{
    margin-right: 15px;
}
.history_content span,.link_content span{
    display:inline-block;
    padding: 1px 2px;
    border-radius: 2px;
    font-size: 12px;
    border:1px solid #dcdee2;
    background-color: #f8f8f9;
    cursor: pointer;
    margin-bottom: 4px;
    max-width: 70px;
     overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}
.nav_moreInfo{
    display: flex;
    align-items: center;
    color: #515a6e;
    position: relative;
    margin-right: 100px;
}
.nav_moreInfo a{
    color: #808695
}
.cartBox{
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top:50%;
    right: -100px;
    transform: translateY(-50%);
}
.cart_ul{
    overflow: auto;
    max-height: 500px;
}
.cartBox:hover .cart_content_Box{
    display: flex
}


.cart_content_Box{
    width: 300px;
    position: absolute;
    top: 10px;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 10px 14px rgba(0,0,0,.1);
    border-radius: 10px;
    color: #808695;
    z-index: 999;
}
.cart_minheight{
    height: 300px;
}
.cart_content_Box ul{
    width: 100%;
}
.cart_content_Box li{
    display: flex;
    align-items: center;
    width: 100%;
    /* height: 90px; */
    padding: 20px 20px;
    background-color: #fff;
    border-bottom: 1px solid #dcdee2;
    position: relative;
}
.cart_content_Box li:first-child{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.cart_content_Box li:hover{
    background-color: #f8f8f9
}
.cart_content_Box li:hover .delcart{
     display: block
}
.delcart{
    position: absolute;
    display: none;
    top: 50%;
    right: 20px;
    transform: translateY(-50%)
}
.delcart:hover{
    opacity: 0.8;
}
.cart_content_Box li:last-child{
    border: none
}
.cart_content_Box .cart_content_left{
    display: flex;
    align-items: center;
    width: 28%
}
.cart_content_right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 72%;
    height: 100%;
    padding: 10px 0 10px 15px;
}
.cart_content_right h4{
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 10px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/    
}
.cart_good_price{
    color:rgb(207,1,12);
    font-size: 15px;
    margin-right: 5px;
    
}
.cart_good_num{
    font-size: 12px;
    color: #c5c8ce;
}
.cart_content_Box img{
    width: 70px;
    height: 70px;
}
.cart_Box_bottom{
    width:100%;
    height: 60px;
    padding: 10px;  
    background-color: #f8f8f9;
    box-shadow: 0 -2px 5px rgba(0,0,0,.1);
    border: 1px solid #dcdee2;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: space-between
}
.cart_Box_bottom>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;

}
.cart_Box_bottom>div>span{
    font-size: 12px;
}
.cart_bottom_price{
    font-size: 14px;
    color: rgb(207,1,12);
}


.a_allGoods{
    font-size: 16px;
    margin-right: 20px;
}
.spread{
    display: block;
    width: 1px;
    height: 20px;
    margin-right: 50px;
    background-color: #515a6e;

}
.md-person{
    
    margin-right: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(100%);
    right: 0;
}
.md-cart{
    margin-right: 5px; 
}
.small_car_circle{
    width: 21px;
    height: 21px;
    font-size: 14px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #eb746b;

    color: #fff;
}
.nav2{
    width: 100%;
    height: 80px;
    background-color: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    padding: 0 20px; 
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.nav2_wrapper{
    width: 1200px;
    height: 88px;
    display: flex;
    align-items: center;
}
.nav2_wrapper ul{
    display: flex;
    width: 1400px;
    margin: 0 auto;
}
.nav2_wrapper ul li{
    width: 100px;   
    position:relative; 
}
.nav2_wrapper ul li:first-child{
    margin-left: 30px;
}
.nav2_wrapper ul li a{
    color: #515a6e;
    font-size: 15px;
    font-weight: 500
}
.nav2_wrapper ul li::before{
    content: "";
    position:absolute;
    width: 3px;
    height: 3px;
    background-color: #808695;
    top: 50%;
    left: -25px;
    transform: translateY(-50%) ;
}

.login_logo{
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    background:linear-gradient(rgba(255,105,180,0.6),rgba(255,255,255,1)) ;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 5px 20px rgba(255,255,255,.2);
    cursor: pointer;
}
.login_logo:hover{
    background-color: azure
}
.login_logo i{
    font-family: STHupo;
    font-style: normal;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.3;
    font-weight: 800;
    font-size: 24px;
    color: rgba(199,21,133,1);
    transform: translateX(-50%) translateY(-50%)
}

.search_fade-enter-active,.search_fade-leave-active{
    transition: all .3s
}
.search_fade-enter,.search_fade-leave-to{
    
    opacity: 0;
}
.search_fade-enter-to,.search_fade-leave{
    opacity: 1;
}
.perBox{
    position: relative;
}
.perBox_person{
    position: absolute;
    width: 80px;
    height: 100px;
    top:5px;
    left: -55px;
    display: none;
    background-color: #fff;
    box-shadow: 0 10px 14px rgba(0,0,0,.1);
    border-radius: 5px;
    color: #808695;
    z-index: 999;
}
.perBox_person span{
    color: #808695;
    margin-bottom: 10px;
    cursor: pointer;
}
.perBox_person span:last-child{
    margin-bottom: 0;
}
.perBox:hover .perBox_person{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
