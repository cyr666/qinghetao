<template>
    <div class="login">
        <div class="login-left">
            <img src="../assets/img/bg-2-compress@2x.jpg"/>
        </div>
        <div class="login-right">
            <div class="logoDiv">
                <img class="logo" src="../assets/img/LOGO-blue@2x.png"/>
            </div>
            <div class="userInput">
                <img src="../assets/img/userName@2x.png"/>
                <input type="text" placeholder="请输入用户名" v-model="username" @keyup.enter="userLogin"/>
            </div>
            <div class="userInput">
                <img src="../assets/img/password@2x.png"/>
                <input type="password" placeholder="请输入密码" v-model="password" @keyup.enter="userLogin"/>
            </div>
            <div class="userInput">
                <img src="../assets/img/code@2x.png"/>
                <input type="text" placeholder="请输入验证码" v-model="inputCode" @keyup.enter="userLogin"/>
                <div class="code">{{code}}</div>
                <i class="refresh" @click="refresh"></i>
            </div>
            <div class="button" @click="userLogin">登录</div>
            <div class="forgetPwd" @click="forgetPwd">找回密码</div>
            <div class="copyright">Copyright © 2013-2018 Greenut. All Rights Reserved.</div>
            <div class="tip" v-if="errorTip">{{tip}}</div>
        </div>

        <div class="loading" v-if="dialogshow"></div>
        <div class="dialog" v-if="dialogshow">
            <div class="box">
                <div class="header">
                    <span>找回密码</span>
                    <img src="../assets/img/close@2x.png" @click="closeDialog"/>
                </div>
                <div class="box-body">
                    <p class="title">{{title}}</p>
                    <div class="body-left card">
                        <div class="contact">
                            <img src="../assets/img/phone@2x.png"/>
                            <div>010-88451901</div>
                        </div>
                        <p>周一至周五 9:00-17:00</p>
                    </div>
                    <div class="body-right card">
                        <div class="contact">
                            <img src="../assets/img/email@2x.png"/>
                            <div>business@piionee.com</div>
                        </div>
                        <p>我们将在72小时内给您回复</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .login{
        width:100%;
        height: 100%;

        .loading {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0,0,0,0.5);
            z-index: 999;
        }
        .dialog {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            z-index: 9999;
            width: 600px;
            height: 368px;
            background: #ffffff;
            .header{
                height:50px;
                line-height:50px;
                border-bottom:1px solid #DDDDDD;
                span{
                    font-size:18px;
                    color:rgba(95,105,125,1);
                    margin-left:30px;
                }
                img{
                    width:18px;
                    height:18px;
                    float: right;
                    margin-top: 16px;
                    margin-right: 20px;
                    cursor:pointer;
                }
            }
            .box-body{
                .title{
                    text-align:center;
                    color:rgba(95,105,125,1);
                    margin:40px 0 30px 0;
                }
                .body-left{
                    float:left;
                    margin-left:60px;
                }
                .body-right{
                    float:right;
                    margin-right:60px;
                }
                .card{
                    text-align:center;
                    .contact{
                        background:rgba(238,242,243,1);
                        border-radius: 2px ;
                        width:225px;
                        height:160px;
                        padding: 30px 0;
                        font-size:18px;
                        color:rgba(46,49,50,1);
                        img{
                            width:68px;
                            height:68px;
                            margin-bottom:12px;
                        }
                    }
                    p{
                        font-size:12px;
                        color:rgba(133,144,166,1);
                        margin-top:12px;
                    }
                }
            }
        }
        .login-left{
            width: 68%;
            height: 100%;
            float:left;
            img{
                width:100%;
                height:100%;
            }
            //background: url(../assets/img/bg-2-compress@2x.jpg) no-repeat;
            //background-size: 100% 100%;
        }
        .login-right{
            float:left;
            width:32%;
            height:100%;
            background:#fff;
            padding:0 4.5%;
            box-sizing: border-box;
            position:relative;
            .tip{
                position:absolute;
                top:393px;
                right:104px;
                background: rgba(0, 0, 0, 0.75);
                color: #ffffff;
                font-size: 16px;
                border-radius: 4px;
                padding:9px 35px;
            }
            .logoDiv{
                width:100%;
                text-align:center;
                .logo{
                    width:155px;
                    padding:17.5vh 0 5.6vh 0;
                }
            }
            .userInput{
                border-bottom:1px solid #DDDDDD;
                padding-top:3.7vh;
                padding-bottom:10px;
                img{
                    margin-right:20px;
                    float:left;
                    width:26px;
                    height:28px;
                }
                input{
                    border:none;
                    outline:none;
                    line-height:26px;
                    font-size:16px;
                    padding:0;
                    height:26px;
                    width:182px;
                }
                ::-webkit-input-placeholder {
                    color:rgba(166,174,177,1);
                    font-size:16px;
                }
                .code{
                    display:inline-block;
                    padding:2px 8px;
                    border:1px solid #DDDDDD;
                }
                .refresh{
                    width:20px;
                    height:20px;
                    background:url(../assets/img/refresh@2x.png);
                    background-size:20px 20px;
                    float:right;
                    margin-top:3px;
                    cursor:pointer;
                }
            }
            .button{
                width:100%;
                height:50px;
                text-align:center;
                line-height:50px;
                background:rgba(0,184,252,1);
                border-radius: 100px;
                font-size:20px;
                color:rgba(255,255,255,1);
                margin:9.4vh 0 1.85vh 0;
                cursor:pointer;
            }
            .forgetPwd{
                text-align:center;
                color:rgba(166,174,177,1);
                cursor:pointer;
            }
            .copyright{
                font-size:10px;
                color:#8590A6;
                position:absolute;
                bottom:20px;
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 500px){
        .login-left{
            display:none;
        }
        .login-right{
            width:100% !important;
        }
    }
</style>
<script>
    import bus from '../store/bus.js';
    export default {
        components: {
        },
        data(){
            return {
                username:'',
                password:'',
                dialogshow:false,
                code:'',
                inputCode:'',
                numArr:[0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O','P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e','f','g','h','i',
                    'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
                errorTip:false,
                tip:'',
                title:''
            }
        },
        methods: {
            forgetPwd(){
                this.dialogshow = true;
                this.title = '您可以通过以下方式找回密码'
            },
            closeDialog(){
                this.dialogshow = false;
            },
            userLogin(){
                // 先验证验证码是否正确
                let randomCode =this.code.toUpperCase();
                if(this.inputCode ===''){
                    this.tip = '验证码不能为空!';
                    this.errorTip = true;
                    setTimeout(()=>{
                        this.errorTip = false;
                    },2000)
                } else if(this.inputCode.toUpperCase() ===  randomCode){
                    $.ajax({
                        url: this.biz.serverUrl+'/piionee/sign',
                        type: 'get',
                        dataType: 'json',
                        data: {
                            account: this.username,
                            password:this.password
                        },
                        success: (res) => {
                            switch(res.signType){
                                case 0:
                                    sessionStorage.setItem('userName',this.username);
                                    this.$router.push(`/bigdata`);
                                    bus.$emit('bigData');
                                    sessionStorage.setItem('searchVal','');
                                    bus.$emit('setSearchVal');
                                    break;
                                case 1:
                                    this.tip = '您输入的账号不存在！';
                                    this.errorTip = true;
                                    setTimeout(()=>{
                                        this.errorTip = false;
                                    },2000);
                                    break;
                                case 2:
                                    this.dialogshow = true;
                                    this.title = '您的账号已过有效期，请联系我们续费。';
                                    break;
                                case 3:
                                    this.dialogshow = true;
                                    this.title = '您的账号已过试用期，如需购买请联系我们。';
                                    break;
                                case 4:
                                    this.tip = '您输入的密码有误！';
                                    this.errorTip = true;
                                    setTimeout(()=>{
                                        this.errorTip = false;
                                    },2000);
                                    break;
                                default:
                                    break;
                            }
                        }
                    })
                } else {
                    this.tip = '您输入的验证码有误！';
                    this.errorTip = true;
                    setTimeout(()=>{
                        this.errorTip = false;
                    },2000)
                }
            },
            getVerifedCode(){
                this.code = '';
                let codeLength = 4;
                for(let i = 0; i < codeLength; i++) {
                    let charIndex = Math.floor(Math.random() * 62);
                    this.code += this.numArr[charIndex];
                }
            },
            refresh(){
                this.getVerifedCode();
            },
        },
        mounted(){
            this.getVerifedCode();
            setInterval(()=>{
                this.getVerifedCode();
            },60000);
            sessionStorage.removeItem('userName');
            bus.$on('quit',()=>{
                this.username = '';
                this.password = '';
                this.inputCode = '';
                this.$router.go(0);
                this.getVerifedCode();
            })
        }
    }
</script>

