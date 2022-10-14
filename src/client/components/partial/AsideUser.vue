<template>
    <aside class="l-aside col-md-2 col-12">
        <ul>
            <li>
                <nuxt-link class="nav-link-row py-4" to="/profile?id=1">
                    <i class="icon-user"></i>
                    <p class="text-base-r">個人資料</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="nav-link-row py-4" to="/orderlist?id=1">
                    <i class="icon-doc"></i>
                    <p class="text-base-r">訂單中心</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="nav-link-row py-4" to="/notice?id=1">
                    <i class="icon-notify"></i>
                    <p class="text-base-r">通知中心</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="nav-link-row py-4" to="/wishlist?id=1">
                    <i class="icon-heart-fill"></i>
                    <p class="text-base-r">追蹤清單</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="nav-link-row py-4" to="/design?id=1">
                    <i class="icon-layout"></i>
                    <p class="text-base-r">我的設計</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link
                    class="nav-link-row py-4"
                    to="/edit_password_login?id=1"
                >
                    <i class="icon-lock"></i>
                    <p class="text-base-r">修改密碼</p>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link
                    class="nav-link-row logout_btn py-4"
                    to="javascript:void(0);"
                >
                    <i class="icon-logout"></i>
                    <p class="text-base-r">登出</p>
                </nuxt-link>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {};
</script>
<script type="text/javascript">
// $(function () {
//     $(".logout_btn").click(function () {
//         memberObj.logout();
//     });
// });
</script>
<style></style>
