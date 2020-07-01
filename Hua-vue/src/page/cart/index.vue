<template>
    <div class="section">
        <y-shelf :title="title1">
            <div slot="content">
                <div class="order_info_Box">
                    <Table border  :columns="columns12" :data="cartList" style="width:100%">
                        <template slot-scope="{ row }" slot="goodsName">
                            <strong>{{ row.goodsName }}</strong>
                        </template>
                        <template slot-scope="{ row }" slot="goodsNum"  >
                            <div class="input_goodsNum_Box" style="display:flex;justify-content: center;align-items: center;">
                                <!-- <Icon type="ios-remove-circle" size="24" color="#2db7f5"/> -->
                                <InputNumber :max="10" :min="0" v-model="row.goodsNum"  style="width:70px;" @on-change="changeNum($event,row.goodsID)"></InputNumber>
                                <!-- <Input v-model="row.goodsNum" style="width:50px;margin:0 10px;display:flex" />
                                <Icon type="ios-add-circle" size="24" color="#2db7f5"/> -->
                            </div>
                            
                        </template>
                        <template slot-scope="{ row }" slot="goodsPrice">
                            <strong>￥{{ row.goodsPrice }}</strong>
                        </template>

                        <template slot-scope="{ row }" slot="goodsImg">
                            <img :src="row.goodsImg"  alt="" style="width:80px;height:80px;margin:10px auto;display:block">
                        </template>                      
                    </Table>
                    <Row class="order_action_Box">
                        <Col span="6" class="order_action_Box_left">
                        </Col>

                        <Col class="order_action_Box_right" span="5" offset="13">
                            <div>

                                <span>总计：<strong class="selected_price">￥{{totalMoney.toFixed(2)}}</strong></span>
                            </div>
                            <Button @click="toOrder">去结算</Button>  
                        </Col>
                    </Row>

                </div>
                <div>
                </div>
            </div>  
        </y-shelf>
    </div>
</template>
<script>
import Yshelf from '@/components/shelf'
import { getLocalStorage } from '@/uilts/storage'
import { mapState, mapMutations } from 'vuex'
export default {
    components:{
        'y-shelf':Yshelf
    },
    data(){
        return{
            title1:'购物清单',
            columns12: [
                {
                    title: '商品名',
                    slot: 'goodsName'
                },
                {
                    title: '商品图片',
                    slot: 'goodsImg'
                },
                {
                    title: '数量',
                    slot: 'goodsNum'
                },
                {
                    title: '商品单价',
                    slot: 'goodsPrice'
                },

           
            ],
            // cartList:[ ],
        }
    },
    mounted(){
        this.getCartList()  
    },
    computed:{
        ...mapState(['cartList']),
        totalMoney(){
            let cartList = this.cartList
            let totalMoney = 0
            cartList && cartList.forEach(el => {
                totalMoney +=(el.goodsNum *el.goodsPrice)
            });
            return totalMoney
        },
        totalNum(){
            let cartList = this.cartList
            let totalNum = 0;
           cartList && cartList.forEach(el => {
                totalNum += el.goodsNum 
            });
            return totalNum
        }
    },  
    methods:{
        ...mapMutations(['EIDT_CART']),
        getCartList(){
            this.cartList = JSON.parse(getLocalStorage('cartList'))
            console.log(this.cartList)
        },
        changeNum(goodsNum,goodsID){
            this.EIDT_CART({goodsNum,goodsID})
        },
        toOrder(){
            this.$router.push('/order')
        }
    }  

}
</script>
<style>
.section{
    width:1200px
}
.order_info_Box{
    width: 100%;
    padding: 20px 30px;
}
.ivu-table-cell{
    /* display: flex; */
    justify-content: center;
    align-items: center;
}

.order_action_Box{
    margin-top: 30px;
    display: flex;
    justify-content: space-between
}
.order_action_Box_left{
    display: flex;
    align-items: center;
}
.order_action_Box_right{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order_action_Box_right>div{
    display: flex;
    flex-direction: column;
    justify-content: center
}
.order_action_Box_right button{
    height: 30px;
}
.selected_price,.selected_Num{
    color: rgb(207,1,12);
    font-size: 20px;
}
.input_goodsNum_Box input{ 
    text-align: center
}
</style>
