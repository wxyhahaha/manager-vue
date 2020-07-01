<template>
    <div class="footer">
        <footer >
            <Row tyle:flex class="service_Box">
                <Col span="4">
                    <h4>关于订单</h4>
                    <ul>
                        <li><a href="" @click.prevent="tip(1)">购买指南</a> </li>
                    </ul>
                </Col>
                <Col span="4">
                    <h4>关于项目</h4>
                    <ul>
                        <li><a href="" @click.prevent="tip(2)">前端</a> </li>
                        <li><a href="" @click.prevent="tip(3)">后台管理系统</a> </li>
                        <li><a href="" @click.prevent="tip(4)">后端</a> </li>
                    </ul>
                </Col>
                <Col span="4">
                    <h4>我的社交</h4>
                    <ul>
                        <li><a href="" @click.prevent="tip(5)">GitHub</a> </li>
                        <li><a href="" @click.prevent="tip(6)">我的QQ空间</a> </li>
                        <li><a href="" @click.prevent="tip(7)">我的微博</a> </li>
                        <li><a href="" @click.prevent="tip(8)">我的微信号</a> </li>
                    </ul>
                </Col>
                <Col span="4">
                    <h4>关于商品</h4>
                    <ul>
                        <li><a href="" @click.prevent="tip(9)">来源</a> </li>
                        <li><a href="" @click.prevent="tip(10)">网站设计灵感</a> </li>
                    </ul>
                </Col>
                <Col span="8" class="call_me">
                    <div>
                        <h3>联系我</h3>
                        <p>13411079644</p>
                    </div>

                </Col>
            </Row>
            <div class="copyright_Box">
                <p>
                    Copyright ©2019, wxy. All Rights Reserved.
                </p>
                <a href="" @click.prevent="tip(11)">法律声明</a>
                <Divider type="vertical" />
                <a href="" @click.prevent="tip(12)">隐私条框</a>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    methods:{
        tip(n){
            switch(n){
                case 1:
                this.$Notice.success({title:'温馨提示',desc:'本网站暂时支持下订单，无支付功能，您可以扫下订单之后弹出的二维码当作支持.谢谢~',duration:10});
                break;
                case 2:
                this.$Notice.success({title:'温馨提示',desc:'本网站前端采用vue+iview开发',duration:10});
                break;
                case 3:
                
                break;
                case 4:
                this.$Notice.success({title:'温馨提示',desc:'本网站后端采用egg.js以及sequelize框架开发',duration:10});
                break;
                case 5:
                window.open('https://github.com/wxyhahaha/')
                break;
                case 6:
                this.$Notice.success({title:'温馨提示',desc:'不好吧，你想要看我的空间？',duration:10});
                break;
                case 7:
                this.$Notice.success({title:'温馨提示',desc:'我很久没玩微博了，当作没看见~',duration:10});
                break;
                case 8:
                this.$Notice.success({title:'温馨提示',desc:'我的微信是不可以随便给别人的哦',duration:10});
                break;
                case 9:
                this.$Notice.success({title:'温馨提示',desc:'没有。真的没有',duration:10});
                break;
                case 10:
                this.$Notice.success({title:'温馨提示',desc:'可能是蹲厕所的时候来的灵感吧~',duration:10});
                break;
                case 11:
                this.$Notice.success({title:'温馨提示',desc:'纯属个人项目，属于开源项目，不存在法律效益，不存在的',duration:10});
                break;
                case 12:
                this.$Notice.success({title:'温馨提示',desc:'用户的密码连管理员都不可见之外，其他信息一目了然吧~',duration:10});
                break;
            }
            
        }
    }
}
</script>
<style>
.footer{
    width: 100%;
    min-width: 1200px;
    margin: 20px auto 0;
    /* height: 300px; */
    background-color: #f7f7f7;
    /* position: fixed; */

}
footer{
    padding: 70px 0 30px;
    width: 1200px;
    margin: 0 auto;
    /* display: flex; */
    
}
footer>div{
    flex: 1
}
.service_Box h4{
    margin-bottom: 10px;
}
.service_Box li{
    margin-bottom: 5px;;
}
.service_Box{
    padding: 0 0 20px;
    border-bottom: 1px solid #dcdee2;
}
.service_Box>div{
    height: 100%;
}
.call_me{
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-end;
    /* align-items: flex-end */
}
.call_me>div{
    /* display: flex; */
    align-self: flex-end;

}
.call_me h3{
    font-size: 30px;
    text-align: right
}
.call_me p{
    font-size: 32px;
    
}
.copyright_Box{
    padding: 20px 0 0;
    display: flex;
    align-items: center;
}
.copyright_Box p{
   margin-right: 10px 
}

</style>
