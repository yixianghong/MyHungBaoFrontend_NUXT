<template>
    <div>
        <Navbar />
        <div class="wrapper">
            <nuxt />
            <img
                class="position-absolute zindex--1 bottom-0 m-0"
                src="~/assets/image/bg02.png"
                alt=""
            />
        </div>
        <Footer />
    </div>
</template>
<script>
import Navbar from "~/components/layout/Navbar";
import Footer from "~/components/layout/Footer";

export default {
    components: {
        Navbar,
        Footer,
    },
};
</script>
<style></style>
