// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/scss/styles.scss'],
    modules: ['nuxt-swiper',],
    runtimeConfig:{
        public:{
            baseUrl: 'https://fazo.uz/api'
        }
    }
})

