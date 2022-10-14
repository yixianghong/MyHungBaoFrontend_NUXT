<template>
    <div>
        <Navbar />
        <div class="position-relative">
            <div class="wrapper">
                <Breadcrumb />
                <div class="container">
                    <div class="row bg-white shadow">
                        <AsideUser />
                        <div class="col-12 col-md-10 pb-50 px-8">
                            <nuxt />
                        </div>
                    </div>
                </div>
                <img
                    class="position-absolute zindex--1 bottom-0 m-0"
                    src="~/assets/image/bg02.png"
                    alt=""
                />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "~/components/layout/Navbar";
import Footer from "~/components/layout/Footer";
import AsideUser from "~/components/partial/AsideUser";
import Breadcrumb from "~/components/partial/Breadcrumb";

export default {
    components: {
        Navbar,
        Footer,
        AsideUser,
        Breadcrumb,
    },
};
</script>

<style></style>
