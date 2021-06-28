export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'junior',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { 
                rel: 'icon', 
                type: 'image/x-icon', 
                href: '/favicon.ico' 
            },
            { 
                rel: 'stylesheet', 
                href 'https://fonts.cdnfonts.com/css/malgun-gothic-boot' 
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['./assets/sass/vendor.scss', './assets/sass/app.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: './plugins/marquiz.js',
            ssr: false,
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    styleResources: {
        scss: [
            '~assets/sass/_variables.scss',
        ],
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'ru',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
