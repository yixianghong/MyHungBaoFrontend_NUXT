<template>
    <div class="error-container d-flex justify-content-center align-items-center">
        <div v-if="statusCode === 404" class="wrap">
            <div class="box shadow-sm">
                <div class="txt-box">
                    <div class="txt-title">您輸入的網址並不存在</div>
                    <p class="txt-sm">
                        請再確認您要前往的網址是否輸入正確<br />
                        或是
                        <nuxt-link to="/" class="txt-link">返回首頁</nuxt-link>
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="wrap">
            <div class="txt-sm">{{ message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NuxtError',
    layout: 'noHeader',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500
        },
        message() {
            return this.error.message
        },
    },
    head() {
        return {
            title: `${
                this.statusCode === 404 ? '您輸入的網址並不存在 - 麥紅包' : this.message
            }`,
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.error-container {
    width: 100%;
    height: calc(100vh - 100px);
}
.box {
    width: 900px;
    height: 400px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding-left: 90px;
}

.img-fail {
    display: block;
    width: 250px;
    flex-shrink: 0;
    order: 1;
}

.txt-box {
    text-align: center;
    width: 100%;
    order: 2;
}

.txt-title {
    font-size: 32px;
    color: #292929;
    margin-bottom: 20px;
}

.txt-sm {
    font-size: 18px;
    color: #707070;
    line-height: 28px;
    margin-bottom: 0;
}

.txt-link {
    color: #ff7800;
    text-decoration: none;
}

.txt-link:hover {
    color: #ff7800;
}

@media screen and (max-width: 1023px) {
    .wrap {
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
    }

    .box {
        width: 100%;
        height: auto;
        display: block;
        padding-left: 0;
        padding-top: 48px;
        padding-bottom: 48px;
    }

    .img-fail {
        order: 2;
        flex-shrink: unset;
        margin: 0 auto;
    }

    .txt-box {
        text-align: center;
        width: 100%;
        order: 1;
    }

    .txt-title {
        font-size: 28px;
    }

    .txt-sm {
        font-size: 16px;
        margin-bottom: 60px;
    }
}
</style>
