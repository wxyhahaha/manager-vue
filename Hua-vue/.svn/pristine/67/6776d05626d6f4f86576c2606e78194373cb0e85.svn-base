<template>
    <div class="goodsListBox">
        <Row class="chooseBox" type="flex">
            <Col span="5">
                <label for="">筛选：  </label> 
                <Select v-model="searchData.priceOrder" style="width:150px;margin-right:10px">
                    <Option v-for="item in priceHoL" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>  
            </Col>
            <Col span="12">
            <Row type="flex" align="middle" :gutter="10">
                <Col span="4"> 
                <Input v-model="searchData.price1" placeholder="价格"></Input>
                </Col>  
                -
                <Col span="4">
                <Input v-model="searchData.price2" placeholder="价格"></Input>
                </Col>
                   <Col span="6" offset="1">
                   <Button type="primary" @click="searchPrice">确定</Button>
                   </Col>        
            </Row>
            </Col>
            
        </Row>
        <Row class="commonBox_content">
            <div class="demo-spin-container">
                <Spin fix v-if="spinShow">
                    <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                     <div>加载中</div>
                </Spin >
            </div>   
            <y-goodsitem v-for="item in goodsList" :item="item"  :key="item.goodsID" ></y-goodsitem> 
            <div class="listNull" v-if="goodsList.length == 0"> 暂无数据 </div>          
        </Row>
        <Row type="flex" justify="center">
        <Col v-if="goodsList.length != 0">
        <Page :total="totalRow" :page-size="10" @on-page-size-change="pageSizeChange" @on-change="pageChange" show-sizer  show-elevator  />
        <div class="totalRow"> 总共有{{totalRow}}个商品 </div>
        </Col>
        </Row>  

    </div>
</template>
<script>
import goodsItem from '@/components/goodsitem'
import { getData } from '@/api/good'
import { mapState, mapMutations } from 'vuex'
import { searchGoods } from '@/api/good'
let timeout = ''
export default {
    components:{
        'y-goodsitem':goodsItem
    },
    data(){
        return{
            spinShow:false,
            searchData:{
                categoryId:undefined,
                priceOrder:undefined,
                price1:undefined,
                price2:undefined,                
                page:1,
                pageSize:10
            },
            totalRow:undefined,
            goodsList:[],
            priceHoL:[
                {
                    label:'价格从高到低',
                    value:-1
                },
                {
                    label:'价格从低到高',
                    value:1
                },  
                {
                    label:'综合',
                    value:0
                },               
            ]
        }
    },
    mounted(){
        this.getDatalist()
    },
    methods:{
        searchPrice(){
            this.getDatalist()
        },
        getDatalist(){
            this.spinShow= true
            getData(this.searchData).then(res=>{
                console.log(res)
                this.spinShow= false
                if(res.data.code == 0){
                    
                    this.goodsList = res.data.data.data
                    this.totalRow = res.data.data.totalRow
                }
            })
        },
        pageChange(page){
            this.searchData.page = page
            this.getDatalist()
        },
        pageSizeChange(pageSize){
            this.searchData.pageSize = pageSize;
            this.getDatalist()
        },
        onListenWindow(){
            
        },        
    },
    computed:{
        ...mapState(['searchInput'])
    },
    watch:{
        searchInput() {
            console.log(this.searchInput)
            if(this.searchInput === '') {
                return this.getDatalist()
            }
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                let goodsName = this.searchInput
                this.spinShow= true
                searchGoods({goodsName}).then(res=>{
                    this.spinShow= false
                    if(res.data.code == 0){                       
                        this.goodsList = res.data.data.data
                        this.totalRow = res.data.data.totalRow
                    }else{
                        this.goodsList = []
                        this.totalRow = 0
                    }
                })
            }, 1000);
        }
    }
}
</script>

<style>
.goodsListBox{
    width: 1200px;
    margin: 20px auto;
    height: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
}
.chooseBox{
    margin-bottom: 10px;
}
.chooseBox>div{
    display: flex;
    align-items: center;
}
.commonBox_content{
    /* border-top: 1px solid #e8eaec;
    border-bottom: 1px solid #e8eaec; */
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    margin:0 0 20px 0;
    position: relative;
}
.commonBox_content div{
    /* flex: 1; */ 
    /* background-color: #fff; */
}
.commonBox_content .listNull{
    padding: 30px 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #808695;
    z-index:9999;
}
.card_float{
    position: relative;
    border:1px solid #fff;
    transition:all 0.5s;
    height:400px;
    background-color: #fff;
}
.card_float:hover{
    border:1px solid #dcdee2;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0,0,0,.1);
    z-index: 10;
}
.totalRow{
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 12px;
    color: #808695;
    letter-spacing: 1px;
}
    .demo-spin-container{
    	display: inline-block;
        width: 100%;
        height: 100%;
        top: 0;
        left:0;
        position:absolute;
        border: 1px solid #eee;
    }
</style>
