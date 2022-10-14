<template>
    <div
        :class="[
            'd-flex justify-content-start align-items-center pt-30 mx-auto mt-10 mb-12 gap-3',
            width,
        ]"
    >
        <i class="fs-2 icon-envelope text-primary"></i>
        <h3 class="h3 letter-space-lg m-0">{{ title }}</h3>
        <div class="flex-grow-1 border-bottom border-primary"></div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
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
