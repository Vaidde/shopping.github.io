<template>
    <header class="header">
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>商品匯歡迎您！</p>
                        <p>
                            <span>請</span>
                            <router-link to="/login">登入</router-link>
                            <router-link to="/register" class="/register">免費註冊</router-link>
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的訂單</a>
                        <a href="###">我的購物車</a>
                        <a href="###">我的商品匯</a>
                        <a href="###">商品匯會員</a>
                        <a href="###">企業採購</a>
                        <a href="###">關注商品匯</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家後台</a>
                    </div>
                </div>
            </div>
            <!--搜索區-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" to="/home">
                        <img src="./images/logo.png" alt="">
                    </router-link>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" 
                        id="autocomplete" 
                        class="input-error input-xxlarge" 
                        v-model='keyword'/>
                        <button class="sui-btn btn-xlarge btn-danger" 
                        type="button" 
                        @click="goSearch">搜索</button>
                    </form>
                </div>
            </div>
    </header>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        keyword:''
    }
  },
  methods:{
    goSearch(){
        this.$router.push('/search')
    }
  }
}
</script>

<style scoped lang="less">
    .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>