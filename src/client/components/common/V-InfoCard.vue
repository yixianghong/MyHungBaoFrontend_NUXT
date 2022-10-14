<template>
    <div class="col">
        <div class="d-flex flex-column align-items-center gap-3">
            <div class="img-frame" style="height: 300px">
                <img :src="require(`~/assets/image/${img}.jpg`)" alt="" />
                <div
                    class="card-img-overlay d-flex flex-column justify-content-center align-items-center"
                >
                    <button
                        class="btn btn-outline-light d-flex align-items-center gap-1"
                    >
                        <span>{{ title }}</span>
                        <i class="icon-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
    },
};
</script>

<style></style>
