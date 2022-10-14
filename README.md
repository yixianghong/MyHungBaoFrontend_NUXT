<h1 align="center">Notice</h1>
    ##Class命名法 Add by anyu.z
        1. class名稱 => SMACSS命名法 (用在自訂義Class)
            3.1 基礎(Base)全站設定。          [ 前綴: 不需要 ]         ex: container 
            3.2 佈局(Layout)客製化頁面        [ 前綴: l-頁面名稱__ ]   ex: l-index__card、l-about__card
            3.3 佈局(Layout)客製化元件        [ 前綴: l-元件- ]        ex: l-banner、l-horizontal-nav
            3.4 狀態(State)如隱藏、顯示等等    [ 前綴: is- ]           ex: is-active 
        2. class="自定義class放最前面 + 中間可放bootstrap的 + margin, padding放最後"
            - ex: <div class="my-class d-flex justify-content-center m-0 p-lg-20"></div>
        3. 給js選取器的自定義class => Snake Case 命名法
            - ex: $('login_btn').on('click,function().......

    ## 新增 Code Style - Added by Rita.Ruo:
        1. blade檔案名稱 => Snake Case 命名法
            - ex: forget_password
        2. function 變數名稱 => 駝峰式命名法 (Camel Case)
            - ex: function userName(){}
        3. 個別頁面js直接寫在該檔案裡面，通用js才寫在function.js
        4. 所有自建檔名或資料夾都是單數，除 Modules, controllers這種
        5. button連結 不要使用onclick="變數名()"，改成使用jq抓取
            - ex:
            $('login_btn').on('click,function(){
                window.location.href() = "{{ route('login') }}";
            });
        6. laravel 連結路徑使用 route('') 不使用 url('')
        7. js 使用jQuery來寫，不要用原生js寫法以便管理

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3003
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
