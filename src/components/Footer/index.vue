<template>
    <div class="footer">
            <div class="footer-container">
                <div class="footerList">
                    <div class="footerItem">
                        <h4>關於我們</h4>
                        <ul class="footerItemCon">
                            <li>商品匯官網</li>
                            <li>招商專區</li>
                            <li>人才招募</li>
                        </ul>

                    </div>
                    <div class="footerItem">
                        <h4>特色服務</h4>
                        <ul class="footerItemCon">
                            <li></li>
                            <li>大宗採購方案</li>
                            <li>異業合作</li>
                            <li>海外配送</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>會員權益</h4>
                        <ul class="footerItemCon">
                            <li>客戶隱私權政策</li>
                            <li>客戶權利義務</li>
                            <li>網路安全標章</li>
                            <li>包裝減量標章</li>
                            <li>防詐騙宣導</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>系列網站</h4>
                        <ul class="footerItemCon">
                            <li>FB粉絲團</li>
                            <li>好物交流社團</li>
                            <li>官方IG</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>客戶服務</h4>
                        <ul class="footerItemCon">
                            <li>訂單/配送進度查詢</li>
                            <li>取消訂單/退貨</li>
                            <li>追蹤清單</li>
                            <li>FAQ 常見問題</li>
                            <li>聯絡我們</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>行動購物APP</h4>
                        <img src="./images/wx_cz.jpg">
                    </div>
                </div>
                <div class="copyright">
                    <ul class="helpLink">
                        <li>關於我們
                            <span class="space"></span>
                        </li>
                        <li>聯絡我們
                            <span class="space"></span>
                        </li>
                        <li>人才招募
                            <span class="space"></span>
                        </li>
                        <li>招商專區
                            <span class="space"></span>
                        </li>
                        <li>電腦版
                            <span class="space"></span>
                        </li>
                        <li>手機版
                            <span class="space"></span>
                        </li>
                        <li>Facebook
                            <span class="space"></span>
                        </li>
                        <li>加入line
                            <span class="space"></span>
                        </li>
                        <li>instagram
                            <span class="space"></span>
                        </li>
                    </ul>
                    <p>地址：台北市大安區敦化南路一段65號22樓 </p>
                    <p>食品業者登錄字號：A-126835073-00000-7</p>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped lang="less">
  .footer {
        background-color: #eaeaea;

        .footer-container {
            width: 1200px;
            margin: 0 auto;
            padding: 0 15px;

            .footerList {
                padding: 20px;
                border-bottom: 1px solid #e4e1e1;
                border-top: 1px solid #e4e1e1;
                overflow: hidden;
                padding-left: 40px;

                .footerItem {
                    width: 16.6666667%;
                    float: left;

                    h4 {
                        font-size: 14px;
                    }

                    .footerItemCon {
                        li {
                            line-height: 18px;
                        }
                    }

                    &:last-child img {
                        width: 121px;
                    }
                }
            }

            .copyright {
                padding: 20px;

                .helpLink {
                    text-align: center;

                    li {
                        display: inline;

                        .space {
                            border-left: 1px solid #666;
                            width: 1px;
                            height: 13px;
                            background: #666;
                            margin: 8px 10px;
                        }
                    }
                }

                p {
                    margin: 10px 0;
                    text-align: center;
                }
            }
        }
  }
</style>