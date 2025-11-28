export default defineNuxtConfig({
    compatibilityDate: '2025-09-11',
    extends: ['docus'],
    modules: ['@nuxtjs/seo', 'nuxt-llms', '@nuxthub/core', '@nuxt/eslint', 'nuxt-gtag', '@nuxt/scripts'],
    css: ['~/assets/css/main.css'],
    devtools: { enabled: false },
    // NuxtSEO configuration
    site: {
        name: 'Polkadart',
    },
    llms: {
        domain: 'https://polkadart.dev',
        title: 'Polkadart',
        description: 'Polkadart is a Dart & Flutter library for interacting with Polkadot-based blockchains. It provides a simple and easy-to-use API to interact with the Polkadot network.',
        full: {
            title: 'Polkadart',
            description: 'Polkadart is a Dart & Flutter library for interacting with Polkadot-based blockchains. It provides a simple and easy-to-use API to interact with the Polkadot network.',
        }
    },
    // NuxtHub configuration
    hub: {
        database: true,
        analytics: false,
        blob: false,
        cache: false,
        kv: false,
        remote: false,
    },
    // Analytics
    gtag: {
        enabled: process.env.NUXT_HUB_ENV === 'production',
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://polkadart.dev',
            gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || '',
            algolia: {
                appId: process.env.NUXT_PUBLIC_ALGOLIA_APP_ID || '',
                apiKey: process.env.NUXT_PUBLIC_ALGOLIA_API_KEY || '',
                indexName: process.env.NUXT_PUBLIC_ALGOLIA_INDEX_NAME || '',
                askAi: process.env.NUXT_PUBLIC_ALGOLIA_ASK_AI || '',
            }
        }
    },
    app: {
        head: {
            link: [
                { rel: 'preconnect', href: `https://${process.env.NUXT_PUBLIC_ALGOLIA_APP_ID}-dsn.algolia.net`, crossorigin: "" },
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@beta' }
            ],
        }
    }
})
