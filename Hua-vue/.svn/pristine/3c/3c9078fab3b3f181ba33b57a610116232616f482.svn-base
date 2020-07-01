<template>
    <div class="bg_login">
        <div :class="{filter:filter,bg_img:true}" >
            <div class="login_Box">
                <h1>Login</h1>
                <span class="login_logo">
                    <i>Hua</i>
                </span>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="login_form">
                    <FormItem prop="username" style="width:200px">
                        <Input type="text" v-model="formInline.username" placeholder="账户" @on-enter="enter">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password" style="width:200px">
                        <Input type="password" v-model="formInline.password" placeholder="密码" @on-enter="enter">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <div class="imgcode_Box">
                    <FormItem prop="imgcode"  class="imgcode_input_Box">
                        <Input type="text" v-model="formInline.imgcode" placeholder="验证码" style="width:80px" @on-enter="enter">
                        </Input>
                        <img :src="`data:image/png;base64,${imgBase64}`" alt="">
                    </FormItem>
                    <FormItem class="login_btn_Box">
                        <Button type="success" :loading='loading' @click="handleSubmit('formInline')">登录</Button>
                    </FormItem>                    
                    </div >


                        <a style="margin-bottom:5px" href="" @click.prevent="toRegister">还没有登录账号？点击注册</a>
                        <a href="" @click.prevent="findPassword">忘记密码？点我立马找回</a>

                    
                </Form>
                <Spin fix v-if="spinShow">
                    <Icon type="ios-loading" size=36 class="demo-spin-icon-load"></Icon>
                    <div>获取验证码中...</div>
                </Spin>
            </div>
        </div>
        <div class="findpassword_mask_Box" v-if="findpwdBox_show">
        </div>
        <transition name="findpwd_fade">
            <div class="findpassword_Box" v-if="findpwdBox_show">
                <Form :model="formItem" :label-width="80"  label-position="left" class="">
                    <FormItem label="用户名">
                        <Input v-model="formItem.username" placeholder="账号"></Input>
                    </FormItem>   
                    <FormItem label="手机号码">
                        <Input v-model="formItem.mobilePhone" placeholder="注册时的手机号码"></Input>
                    </FormItem>
                    <div style="display:flex;justify-content:space-around">
                        <Button type="primary" :loading="loading"  @click.prevent="findpwd">找回密码</Button>
                        <Button @click.prevent="cancelfindpwd">取消</Button>  
                    </div>
                  
                </Form>
            </div>
        </transition>     

    </div>
</template>
<script>
import { setLocalStorage } from '@/uilts/storage'
import {fitchCodeImg, hualogin, findpassword } from '@/api/user'
export default {
        data () {
            return {
                spinShow:false,
                imgBase64:'',
                loading:false,
                filter:false,
                findpwdBox_show:false,
                formInline: {
                    username: '',
                    password: '',
                    imgcode:''
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请输入账户', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码.', trigger: 'blur' },
                    ],
                    imgcode: [
                        { required: true, message: '请输入验证码.', trigger: 'blur' },
                    ],
                },
                formItem:{
                    username:'',
                    mobilePhone:''
                },
            }
        },
        mounted(){
            this.getCaptcha()
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        
                        this.login()
                        
                    } else {
                        this.$Message.error('登录失败!');
                    }
                })
            },
            enter(e){
                if(e.keyCode == 13) this.handleSubmit('formInline')
            },
            getCaptcha(){
               this.spinShow = true
               this.$axios.post('http://localhost:7001/hua/getCaptcha').then(res=>{
                   console.log('fitchCodeImg',res)
                    if(res.data.code==0){
                        this.imgBase64 = res.data.data
                        
                        setTimeout(()=>{this.spinShow = false},500)
                    }else{
                        this.$Message.error('获取验证码错误')
                    }
                    
                return res
                })
                
            },
            toRegister(){
                    this.$router.push('/register')              
            },
            login(){
                this.loading = true
                this.$axios.post('http://localhost:7001/hua/login',this.formInline).then(res=>{
                    this.loading = false
                    this.getCaptcha()
                    if(res.data.code == 0){
                        console.log(res)  
                        setLocalStorage('loginToken',res.data.data.newtoken)
                        setLocalStorage('userInfo',res.data.data.user)
                        this.$router.go(-1)
                        this.$Message.success('登录成功!');
                    }
                    if(res.data.code == 404)this.$Message.error('密码错误!');
                    if( res.data.code == 300 ) this.$Message.error('验证码错误!');
                    if( res.data.code == 500 ) this.$Message.error('用户不存在!');
                })
            },
            findpwd(){
                this.loading=true
                this.$axios.post('http://localhost:7001/hua/findPwd',this.formItem).then(res=>{
                    this.loading = false
                    if(res.data.code==0){
                        this.findpwdBox_show = !this.findpwdBox_show
                        this.filter = !this.filter
                        this.$Message.success({
                            content:   '密码找回成功：' +res.data.password,
                            duration:10
                        })
                    }else{
                        this.$Message.error({
                            content:   '输入的账号或者手机号码有误',
                            duration:10
                        })                       
                    }
                })
            },
            findPassword(){
                this.findpwdBox_show = !this.findpwdBox_show
                this.filter = !this.filter
            },
            cancelfindpwd(){
                this.findpwdBox_show = !this.findpwdBox_show
                this.filter = !this.filter
            },
        }
}
</script>
<style>
.bg_login{
    width: 100vw;
    min-width: 1200px;
    height: 100vh;
    min-width: 1000px;
    /* background-image: url('../../../static/bg_login.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat; */
    
}
.bg_img{
    width: 100%;

    height: 100%;

    background-image: url('../../../static/bg_login.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

}
.filter{
    filter: blur(5px) ;
}
h1{
    font-family: STHupo;
    margin-bottom: 30px;
    font-weight: 200;
    font-size: 30x;
    color:#fff;
    opacity: 0.9;
}
.findpassword_mask_Box{
    width: 100%;
    height: 100%;
    position:fixed;
    /* background: #fff; */
    z-index: 9999;
    filter: blur(5px)
}
.findpassword_Box{
    position:fixed;
    top:50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 99999;
    background-color: #fff;
    border-radius: 8px;
    padding: 30px ;
    border: 1px solid #dcdee2;
    transition: all 0.3s ease-out;
}
.findpassword_Box:hover{
    
    /* box-shadow: 0 0 520px rgba(20,52,129,1); */
    transform:translateX(-50%) translateY(-50.5%);
    box-shadow: 0 0 14px rgba(23,35,61,0.9);
}
.login_Box{
    /* width: 400px; */
    /* height: 500px; */
    padding: 30px 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-shadow: 0 0 15px rgba(255,255,255,.3);
    border-radius: 10px;
    background:linear-gradient(rgba(30,144,255,.3),rgba(0,0,0,.5)) 
}
/* 表单 */
.login_Box .login_form>div{
    margin-right: 0
}
.login_form{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;    
}
.login_Box .login_logo{
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    background:linear-gradient(rgba(255,105,180,0.6),rgba(255,255,255,1)) ;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 50px;
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
.imgcode_Box{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.imgcode_Box .imgcode_input_Box{
    width: 100%;
    display: flex;
    align-items: center
}
.imgcode_input_Box>div{
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content: space-between
}
.imgcode_Box .login_btn_Box{
    display: flex;
    justify-content: center;
    width:100% ;
    /* align-self: flex-end */
}
.login_btn_Box button{
    width:150px;
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.findpwd_fade-enter-active,.findpwd_fade-leave-active{
    transition: all 0.5s
}
.findpwd_fade-enter,.findpwd_fade-leave-to{
    opacity: 0;
}
</style>
