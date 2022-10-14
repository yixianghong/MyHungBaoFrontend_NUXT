<template>
    <nav class="navbar bg-light sticky-top px-md-10 px-6">
        <div class="container-fluid">
            <nuxt-link class="navbar-brand" to="/">
                <img src="~/assets/image/logo.png" alt="" />
            </nuxt-link>
            <button
                class="navbar-toggler d-xl-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- {{-- 桌機版MENU --}} -->
            <div class="d-none d-xl-flex justify-content-between flex-grow-1">
                <ul class="navbar-nav d-flex flex-row">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" aria-current="page" to="/news"
                            >最新消息</nuxt-link
                        >
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/guide"
                            >紅包指南</nuxt-link
                        >
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/store"
                            >線上設計</nuxt-link
                        >
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/download"
                            >版型下載</nuxt-link
                        >
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/store_paper"
                            >紙品訂購</nuxt-link
                        >
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/contact"
                            >聯絡我們</nuxt-link
                        >
                    </li>
                </ul>
                <!-- {{-- Control --}} -->
                <div class="d-flex align-items-center gap-3">
                    <!-- {{-- <i class="fs-4 icon-search px-1"></i> --}}
                {{-- Cart & Login --}} -->
                    <nuxt-link
                        class="fs-4 icon-cart px-1"
                        to="/cart"
                    ></nuxt-link>
                    <nuxt-link
                        class="d-flex align-items-center px-2"
                        to="profile"
                    >
                        <i class="fs-4 icon-user-circle me-1"></i>
                        <!-- @if (!empty(session()->get('user_id')))
                        <span class="text-base-r">{{ session()->get('user_name') }}</span>
                    @else
                        <span class="text-base-r">登入/註冊</span>
                    @endif -->
                    </nuxt-link>
                    <!-- {{-- Social Media --}} -->
                    <div
                        class="d-flex align-items-center border-end border-start border-secondary gap-2 px-6"
                    >
                        <a
                            class="fs-4 icon-facebook text-secondary"
                            target="_blank"
                            href="https://www.facebook.com/myhungbao.1985"
                        ></a>
                        <a
                            class="fs-4 icon-instagram text-secondary"
                            target="_blank"
                            href="https://www.instagram.com/myhungbao/"
                        ></a>
                        <a class="fs-4 icon-line text-secondary" href=""></a>
                    </div>
                    <!-- {{-- Language --}} -->
                    <div class="nav-item dropdown d-none">
                        <a
                            class="d-flex align-items-center dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="fs-4 icon-language"></i>繁中
                        </a>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li><a class="dropdown-item" href="#">簡中</a></li>
                            <li><a class="dropdown-item" href="#">EN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- {{-- 手機版MENU --}} -->
            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header">
                    <nuxt-link
                        class="navbar-brand offcanvas-title"
                        id="offcanvasNavbarLabel"
                        to="/"
                    >
                        <img src="~/assets/image/logo.png" alt="" />
                    </nuxt-link>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <ul
                        class="navbar-nav justify-content-end flex-grow-1 pe-3 border-top border-bottom border-light mb-6 py-6"
                    >
                        <li class="nav-item">
                            <nuxt-link
                                class="nav-link"
                                aria-current="page"
                                to="/news"
                                >最新消息</nuxt-link
                            >
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/guide"
                                >紅包指南</nuxt-link
                            >
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to=""
                                >線上設計</nuxt-link
                            >
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/download"
                                >版型下載</nuxt-link
                            >
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/store_paper"
                                >紙品訂購</nuxt-link
                            >
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/contact"
                                >聯絡我們</nuxt-link
                            >
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/login"
                                >登入/註冊</nuxt-link
                            >
                        </li>
                    </ul>
                    <!-- {{-- <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-secondary" type="submit">Search</button>
                </form> --}} -->
                    <!-- {{-- Social Media --}} -->
                    <div
                        class="d-flex justify-content-center align-items-center gap-2 px-6"
                    >
                        <a
                            class="fs-1 icon-facebook text-secondary"
                            target="_blank"
                            href="https://www.facebook.com/myhungbao.1985"
                        ></a>
                        <a
                            class="fs-1 icon-instagram text-secondary"
                            target="_blank"
                            href="https://www.instagram.com/myhungbao/"
                        ></a>
                        <a class="fs-1 icon-line text-secondary" href=""></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style></style>
