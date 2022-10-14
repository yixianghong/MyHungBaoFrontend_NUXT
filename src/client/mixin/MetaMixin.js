
const getDefaultScriptObject = () => {
    return [
        {
            __at__context: 'http://schema.org',
            __at__type: 'WebPage',
            name: process.env.APP_NAME,
            url: process.env.BASE_URL,
        },
    ]
}

const getInfoCatch = func => {
    try {
        return func()
    } catch (err) {

        return undefined
    }
}

export default {
    name: 'MetaMixin',
    computed: {},
    methods: {
        getTitle() { },
        getDesc() { },
        getScript() { },
        getScriptObj() { },
        getLink() { },
        getCanonicalLink() { },
        getOgImage() { },
        getKeywords() { },
    },
    head() {
        // ssr head & meta
        const metaObj = {
            meta: [],
        }
        const titleContent = `${this.getTitle()} - ${process.env.APP_NAME}`
        if (titleContent) {
            metaObj.title = titleContent
            metaObj.meta.push({
                hid: 'og:title',
                name: 'og:title',
                property: 'og:title',
                content: titleContent,
            })
            metaObj.meta.push({
                hid: 'twitter:title',
                name: 'twitter:title',
                content: titleContent,
            })
        }
        const descContent = this.getDesc()
        if (descContent) {
            metaObj.meta.push({
                hid: 'description',
                name: 'description',
                content: descContent,
            })
            metaObj.meta.push({
                hid: 'twitter:description',
                name: 'twitter:description',
                content: descContent,
            })
            metaObj.meta.push({
                hid: 'og:description',
                name: 'og:description',
                property: 'og:description',
                content: descContent,
            })
        }
        const link = this.getLink() || process.env.APP_URL
        // debug('link', link)
        if (link) {
            metaObj.meta.push({
                hid: 'og:url',
                name: 'og:url',
                property: 'og:url',
                content: link,
            })
        }
        const ogImage = this.getOgImage()
        if (ogImage) {
            metaObj.meta.push({
                hid: 'og:image',
                name: 'og:image',
                property: 'og:image',
                content: ogImage,
            })
            metaObj.meta.push({
                hid: 'twitter:image',
                name: 'twitter:image',
                property: 'twitter:image',
                content: ogImage,
            })
            metaObj.meta.push({
                hid: 'facebook:image',
                name: 'facebook:image',
                property: 'facebook:image',
                content: ogImage,
            })
        }
        const keywords = this.getKeywords()
        if (keywords) {
            metaObj.meta.push({
                hid: 'keywords',
                name: 'keywords',
                content: keywords,
            })
        }
        const scriptObj = getInfoCatch(this.getScriptObj.bind(this)) || getDefaultScriptObject()
        metaObj.script = [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify(scriptObj).replace(/__at__/g, '@'),
            },
            ...(this.getScript() || []),
        ]
        metaObj.__dangerouslyDisableSanitizers = ['script']

        const canonicalLink =
            this.getCanonicalLink() || `${process.env.BASE_URL}${this.$route.path}`
        metaObj.link = [
            {
                rel: 'canonical',
                href: canonicalLink,
            },
        ]
        return metaObj
    },
}
