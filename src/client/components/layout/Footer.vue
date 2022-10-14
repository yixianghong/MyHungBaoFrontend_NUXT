<template>
  <footer class="bg-primary p-10">
    <div
      class="
        d-flex
        flex-column flex-md-row
        justify-content-between
        align-items-start
        gap-md-10
        mx-auto
        flex-wrap
        gap-0
      "
    >
      <!-- {{-- logo --}} -->
      <nuxt-link to="/">
        <img src="~/assets/image/logo-gold.png" alt="" />
      </nuxt-link>
      <!-- {{-- TODO: Safari 電話會變黑色 --}} -->
      <ul class="list-group list-group-transparent flex-shrink-0">
        <li class="list-group-item text-white">
          <i class="icon-fphone me-1"></i> 02-8245-7050
        </li>
        <li class="list-group-item text-white">
          <i class="icon-fphone me-1"></i> 免付費電話 0800-666-899
        </li>
      </ul>
      <ul class="list-group list-group-transparent flex-shrink-0">
        <li class="list-group-item text-white">
          <i class="icon-fmail me-1"></i> info@myhb.com
        </li>
        <li class="list-group-item text-white">
          <i class="icon-fhome me-1"></i> 23558 新北市中和區勝利路35巷1弄36號1F
        </li>
      </ul>
      <!-- {{-- follow us --}} -->
      <ul class="list-group list-group-transparent flex-shrink-0">
        <li class="list-group-item d-flex flex-wrap text-white">
          <h6 class="me-2">FOLLOW US</h6>
          <a href="" class="icon-ffacebook fs-2 me-1 text-white"></a>
          <a href="" class="icon-finstagram fs-2 text-white"></a>
          <a href="" class="ms-4 d-flex text-white">
            <h6 class="me-2">LINE@ 線上客服</h6>
            <i class="icon-fline fs-2"></i>
          </a>
        </li>
        <li class="list-group-item text-secondary">
          Copyright © 2022 MY HUNG BAO . All rights reserve
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>