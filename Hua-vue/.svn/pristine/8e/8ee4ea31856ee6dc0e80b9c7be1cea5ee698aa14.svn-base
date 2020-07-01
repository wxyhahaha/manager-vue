<template>
    <transition name="pay_Box_fade">
        <div class="pay_Box" v-if="showPayBox">
            <span class="pay_close" @click="closePayBox">
                <Icon type="ios-close" size="40"/>
            </span>
            <h4>
                您已提交订单成功!
            </h4>
            <div class="pay_success_icon_Box">
                <Icon type="md-checkmark" color="#fff" size="30"/>
            </div>
            <div class="pay_img_Box">
                <img src="@/assets/images/9cb6e2269834283f9dd53106710ff10.png" alt="">
            </div>
        </div>
    </transition>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed:{
        ...mapState(['showPayBox'])
    },
    methods:{
        ...mapMutations(['SHOW_PAYBOX']),
        closePayBox(){
            this.SHOW_PAYBOX(this.showPayBox)
            this.$emit('sendPay', true)
        }
    },

}
</script>

<style>
.pay_Box{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(1) ;
    z-index: 9999;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 14px rgba(0,0,0,.1);
}
.pay_Box h4{
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
}
.pay_Box>div{
    margin-bottom: 10px;
}
.pay_success_icon_Box{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #19be6b;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pay_img_Box{
}
.pay_close{
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
    
}
.pay_close:hover{
    opacity: .7;
    transform: rotate(270deg);
}
.pay_img_Box img{
    width: 70%;
    display: block;
    margin: 0 auto;
    border: 1px solid #f8f8f9;

}

.pay_Box_fade-enter-active,.pay_Box_fade-leave-active{
    transition: all 0.4s
}
.pay_Box_fade-leave,.pay_Box_fade-enter-to{
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 1;
}
.pay_Box_fade-leave-to,.pay_Box_fade-enter{
    transform: translateX(-50%) translateY(-50%) scale(0);
    opacity: 0;
}
</style>
