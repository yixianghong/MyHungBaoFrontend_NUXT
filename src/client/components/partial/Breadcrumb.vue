<template>
    <nav aria-label="breadcrumb" class="bg-danger py-3 px-10 text-white">
        <ol class="breadcrumb container-md">
            <li class="breadcrumb-item"><nuxt-link to="/">首頁</nuxt-link></li>
            <slot name="breadcrumb"></slot>
            <!-- @yield('breadcrumb') -->
        </ol>
    </nav>
</template>

<script>
export default {};
</script>

<style></style>
