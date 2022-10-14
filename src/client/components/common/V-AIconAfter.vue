<template>
    <a :href="route" :class="['btn', className]">
        {{ text }}
        <i :class="['ms-2 text-sm-r', icon]"></i>
    </a>
</template>

<script>
export default {
    props: {
        route: {
            type: String,
            default: "",
        },
        className: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        icon: {
            type: String,
            default: "",
        },
    },
};
</script>

<style></style>
