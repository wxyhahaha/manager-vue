<template>
    <div class="section">
        <y-shelf :title="title1">
            <div slot="content">
                <div class="order_info_Box">
                    <Table border :columns="columns12" :data="dataList" class="ytable" :loading="loading">
                        <template slot-scope="{ row }" slot="userName">
                            <strong style="font-size:10px">{{ row.userName }}{{row.userPhone&&row.userName?'['+row.userPhone+']':""}}</strong>
                        </template>
                        <template slot-scope="{ row }" slot="orderStatus" style="displlay:flex">
                            <strong>{{ orderStatus[0][row.orderStatus]  }}</strong>
                        </template>         
                        <template slot-scope="{ row, index }" slot="action" >
                            <div class="action"  style="">
                            <Button type="text" size="small"  @click="show(index)">订单详情</Button>
                            <Button type="text" size="small" v-if="row.orderStatus == 0 || row.orderStatus ==1" @click="show(index)">设置成功</Button>
                            <Button type="text" size="small"  v-if="row.orderStatus == 0" @click="show(index)">发货</Button>
                            <Button type="text" size="small"  v-if="row.orderStatus == 2 ||row.orderStatus == 1"  @click="show(index)">退货</Button>

                            <Button type="text" size="small" @click="remove(index)">删除</Button>
                            </div>

                        </template>
                        
                    </Table>
                    <Page :total="totalRow" :page-size="10" @on-page-size-change="pageSizeChange" @on-change="pageChange" show-sizer />

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
import { fitchDataList, removeData } from '@/api/order'
export default {
    components:{
        'y-shelf':Yshelf
    },
    data(){
        return{
            title1:'我的订单',
                searchData:{
                    userName:undefined,
                    userPhone:undefined,
                    userId:undefined,
                    orderNo:undefined,
                    dateAdd:undefined,
                    dateUpdate:undefined,
                    page:1,
                    pageSize:10
                },
                totalRow:undefined,
                loading:true,
                columns12: [
                    {
                        title: '用户',
                        slot: 'userName'
                    },
                    {
                        title: '订单号',
                        key: 'orderNo'
                    },
                    {
                        title: '商品数',
                        key: 'goodsNum'
                    },
                    {
                        title: '订单状态',
                        slot: 'orderStatus'
                    },
                    {
                        title: '订单总额',
                        key: 'realTotalMoney'
                    },
                    {
                        title:'实际支付',
                        key:'needPay'
                    },
                    {
                        title: '交易时间',
                        key: 'dateAdd'
                    }, 
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                dataList: [ ],
                // -3:用户拒收 -2:未付款的订单 -1：用户取消 0:待发货 1:配送中 2:用户确认收货
                orderStatus:[
                    {
                        '1' :'用户拒收',
                        '-2':'未付款的订单',
                        '-1':'用户取消',
                        '0' :'待发货',
                        '1' :'配送中',
                        '2' :'用户确认收货'
                    }
                ],
                recomand:[
                    {
                        key:'否',
                        value:0
                    },
                    {
                        key:'是',
                        value:1
                    }
                ],
                sale:[
                    {
                        key:'否',
                        value:0
                    },
                    {
                        key:'是',
                        value:1
                    }
                ]
            }
    },
    mounted(){
        try{

        }catch(e){
            
        }
        this.searchData.userId = JSON.parse(getLocalStorage('userInfo')).userId || undefined
        this.fitchData()
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: '用户信息',
                width:700,
                content: `Name：${this.dataList[index].name}<br>Age：${this.dataList[index].age}<br>Address：${this.dataList[index].address}`,
                render: (h) => {
                    return h(orderDetail)
                }
            })
        },
        remove (index) {
            
            this.confirm('确定要删除？','删除后无法恢复',()=>{
            let id = this.dataList[index].id
            this.loading =true
            removeData(id).then((res)=>{
                if(res.data.code == 0){
                    console.log(res)
                    this.loading = false
                    this.fitchData()
                    this.$Notice.success({title:'删除成功'});
                    
                }
            }).catch((res)=>{
                console.log(res)
            })
            })

        },
        pageChange(page){
            this.searchData.page = page
            this.fitchData()
        },
        pageSizeChange(pageSize){
            this.searchData.pageSize = pageSize;
            this.fitchData()
        },
        fitchData(){
        let searchData = this.searchData
        console.log(searchData)
        this.loading=true
        fitchDataList(this.searchData).then((res)=>{
            if(res.data.code ==0){
                this.loading=false
                console.log(res)
                this.totalRow = res.data.result.totalRow
                this.dataList = res.data.result.data
                this.searchData.userName=undefined,
                this.searchData.userPhone=undefined
                this.searchData.orderNo=undefined
            }
            else{
                this.$Loading.error();
            }

        }).catch((res)=>{
            this.$Loading.error();
            console.log(res)
        })
        },
        timeChange(e){
            this.searchData.dateAdd = e[0];
            this.searchData.dateUpdate = e[1]
        },
        search(){
            this.fitchData();
        },
        confirm (title, content, fn) {
            this.$Modal.confirm({
                title: title,
                content: content,
                onOk: () => {
                    fn()
                },
                onCancel: () => {
                    this.$Message.info('取消');
                }
            });
        }
    },

}
</script>
<style>
.ytable{
    margin-bottom: 30px;
    font-size: 11px;
}
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
