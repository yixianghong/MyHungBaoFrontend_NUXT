<template>
    <div class="w-100 position-relative pb-16">
        <div class="mb-20">
            <!-- {{-- Slider --}} -->
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="~/assets/image/slide01.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="~/assets/image/slide01.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="~/assets/image/slide01.jpg" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="~/assets/image/slide01.jpg" alt="" />
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
            <!-- {{-- News --}} -->
            <div
                class="d-flex flex-column flex-md-row align-items-stretch bg-white"
            >
                <div
                    class="w-100 w-md-25 bg-secondary d-flex justify-content-center align-items-center flex-row py-6 text-white"
                >
                    <h3 class="letter-space-lg me-4">最新消息</h3>
                    <small class="letter-space-lg me-4">News</small>
                </div>
                <div class="w-100 w-md-55 d-flex flex-column gap-6 py-6 px-8">
                    <a
                        v-for="(item, index) in news"
                        :key="index"
                        :href="`news_detail/${item.id}`"
                        class="d-flex flex-row"
                    >
                        <i class="icon-comment fs-5 me-1"></i>
                        <p>{{ item.name }}</p>
                        <small class="ms-auto">{{
                            item.article_date.slice(0, 10).replaceAll("-", "/")
                        }}</small>
                    </a>
                </div>
                <div
                    class="w-100 w-md-20 d-flex justify-content-center align-items-center flex-row pb-6"
                >
                    <VABtn
                        route="/news?p=1"
                        className="btn-outline-gray"
                        text="查看更多"
                    />
                </div>
            </div>
            <img
                src="~/assets/image/index-news-shadow.png"
                alt=""
                class="img-fluid"
            />
            <div class="container">
                <!-- {{-- Process --}} -->
                <VTitle title="紅包製作流程" width="w-75" />
                <div class="d-flex flex-md-nowrap flex-row flex-wrap">
                    <div class="l-index__process-item">
                        <div class="l-index__process-img">
                            <img src="~/assets/image/step01.png" alt="" />
                        </div>
                        <div class="btn btn-primary rounded-5">STEP 1</div>
                        <h4 class="fs-5 fs-lg-4 mt-3">選擇版型&材質</h4>
                    </div>
                    <div class="l-index__process-item">
                        <div class="l-index__process-img">
                            <img src="~/assets/image/step02.png" alt="" />
                        </div>
                        <div class="btn btn-primary rounded-5">STEP 2</div>
                        <h4 class="fs-5 fs-lg-4 mt-3">上傳圖檔</h4>
                    </div>
                    <div class="l-index__process-item">
                        <div class="l-index__process-img">
                            <img src="~/assets/image/step03.png" alt="" />
                        </div>
                        <div class="btn btn-primary rounded-5">STEP 3</div>
                        <h4 class="fs-5 fs-lg-4 mt-3">線上下單</h4>
                    </div>
                    <div class="l-index__process-item">
                        <div class="l-index__process-img">
                            <img src="~/assets/image/step04.png" alt="" />
                        </div>
                        <div class="btn btn-primary rounded-5">STEP 4</div>
                        <h4 class="fs-5 fs-lg-4 mt-3">印刷製作</h4>
                    </div>
                    <div class="l-index__process-item">
                        <div class="l-index__process-img">
                            <img src="~/assets/image/step05.png" alt="" />
                        </div>
                        <div class="btn btn-primary rounded-5">STEP 5</div>
                        <h4 class="fs-5 fs-lg-4 mt-3">出貨</h4>
                    </div>
                </div>
                <!-- {{-- 製作指南 --}} -->
                <VTitle title="紅包製作指南" width="w-75" />
                <p class="mx-auto mt-10 text-center">
                    古每躲北心小未錯鳥旦「又京問西見且」少根松，香蝴步皮工忍路意飽早，午呢穴尾，怪成時步着黃乞穿今花乙。兆占出錯南玉長幼巾！冒長拍七旁女每文貓快火叫布下，珠飯個冰吹水。種旁才平牛水者畫音；九香包子念門者主詞家又時圓虎國高牛細，給刃朵雪娘友空抄助卜花兆衣。
                </p>
                <div
                    class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-6 mt-md-16 mt-10"
                >
                    <VInfoCard title="版型樣式" img="product-01" />
                    <VInfoCard title="紙張樣式" img="product-01" />
                    <VInfoCard title="印前須知" img="product-01" />
                    <VInfoCard title="如何完稿" img="product-01" />
                    <VInfoCard title="案例分享" img="product-01" />
                    <VInfoCard title="紅包知識" img="product-01" />
                </div>
                <!-- {{-- About --}} -->
                <div
                    class="my-40 py-20"
                    :style="{
                        backgroundImage:
                            'url(' + require('@/assets/image/bg01.jpg') + ')',
                    }"
                >
                    <div
                        class="d-flex flex-column flex-md-row justify-content-center container"
                    >
                        <div
                            class="w-100 w-md-50 w-lg-40 d-flex flex-column justify-content-center align-items-center mb-md-0 mb-16 px-6"
                        >
                            <h3 class="text-secondary mt-auto text-center">
                                <i class="icon-envelope fs-2"></i
                                ><span class="text-white">關於</span>麥紅包
                            </h3>
                            <p class="mb-4 text-center text-white">
                                全台第一個紅包線上客製化網站平台，由麥思印刷整合多年來協助企業統整印刷品之規劃與設計製作，客戶的滿意與信任是我們對於創新與品質要求的鼓舞。
                            </p>
                            <VAIconAfter
                                route="news"
                                className="btn-secondary"
                                text="查看更多"
                                icon="icon-arrow-right"
                            />
                        </div>
                        <div
                            class="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center px-6"
                        >
                            <h3 class="text-center text-white">
                                紅包客製化！<br />讓<span class="text-secondary"
                                    >麥紅包</span
                                >來幫你 !
                            </h3>
                            <p class="mb-4 text-center text-white">
                                滿足不同企業、團體、組織機構相同產品不同設計的訂製需求，也為它們帶來更多創意推廣促銷活動模式，更好地建立和宣傳品牌。
                            </p>
                            <VAIconAfter
                                route="news"
                                className="btn-dark"
                                text="查看更多"
                                icon="icon-arrow-right"
                            />
                        </div>
                    </div>
                </div>
                <!-- {{-- Customer --}} -->
                <div class="container">
                    <VTitle title="麥紅包客戶" width="w-75" />
                    <div class="row row-cols-3 row-cols-lg-6 gy-6 pb-40">
                        <div class="col">
                            <img
                                src="~/assets/image/product-01.jpg"
                                alt=""
                                class="rounded-circle overflow-hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VABtn from "@/components/common/V-ABtn.vue";
import VTitle from "@/components/common/V-Title.vue";
import VInfoCard from "@/components/common/V-InfoCard.vue";
import VAIconAfter from "@/components/common/V-AIconAfter.vue";
import MetaMixin from "@/mixin/MetaMixin";

export default {
    mixins: [MetaMixin],
    components: {
        VABtn,
        VTitle,
        VInfoCard,
        VAIconAfter,
    },
    data() {
        return {
            news: []
        }
    },
    // ssr
    async fetch() {
        try {
            const res = await this.$api.backend.getNews();
            this.news = res.data
        } catch (err) {
            console.log(err);
        }
    },
    // csr
    async mounted() {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            cssMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true,
        });
    },
    methods: {
        // 設定meta
        getDesc() {
            const description = "麥紅包";
            return description;
        },
        getTitle() {
            return `首頁`;
        },
        getKeywords() {
            return `麥紅包`;
        },
    },
};
</script>

<style></style>
