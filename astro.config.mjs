import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://polkadart.dev',
    integrations: [partytown({
        config: {
            forward: ['dataLayer.push'],
        },
		}), tailwind({
        applyBaseStyles: false,
		}), sitemap(), icon(), starlight({
        title: 'Polkadart',
        description: 'Polkadart is a Dart & Flutter library for interacting with Polkadot-based blockchains. It provides a simple and easy-to-use API to interact with the Polkadot network.',
        social: {
            telegram: 'https://t.me/polkadart',
            github: 'https://github.com/leonardocustodio/polkadart',
        },
        logo: {
            light: './src/assets/logo-black.png',
            dark: './src/assets/logo-white.png',
            replacesTitle: true,
        },
        expressiveCode: {
            themes: ['dark-plus', 'github-light'],
        },
        editLink: {
            baseUrl: 'https://github.com/polkadart/docs/edit/main',
        },
        tableOfContents: {
            maxHeadingLevel: 4,
        },
        lastUpdated: true,
        sidebar: [
            {
                label: 'Introduction',
                items: [
                    { label: 'Overview', slug: 'intro' },
                ],
            },
            {
                label: 'Getting started',
                items: [
                    { label: 'Installation', slug: 'getting-started/installation' },
                    { label: 'Type generator', slug: 'getting-started/type-generator' },
                    { label: 'Connecting', slug: 'getting-started/connecting' },
                    { label: 'Decoding data', slug: 'getting-started/decoding' },
                ],
            },
            {
                label: 'Polkadart API',
                items: [
                    { label: 'Overview', slug: 'api/overview' },
                    { label: 'State API', slug: 'api/state' },
                    { label: 'System API', slug: 'api/system' },
                    { label: 'Chain API', slug: 'api/chain' },
                    { label: 'Author API', slug: 'api/author' },
                ],
            },
            {
                label: 'Blockchain API',
                items: [
                    { label: 'Overview', slug: 'metadata/overview' },
                    { label: 'Extrinsics', slug: 'metadata/extrinsics' },
                    { label: 'Constants', slug: 'metadata/constants' },
                ],
            },
            {
                label: 'Keyring & Signer',
                items: [
                    { label: 'Overview', slug: 'keyring-signer/overview' },
                    { label: 'Keypair', slug: 'keyring-signer/keypair' },
                    { label: 'SS58 format', slug: 'keyring-signer/ss58' },
                    { label: 'Sign & Verify', slug: 'keyring-signer/sign-verify' },
                ],
            },
            {
                label: 'Guides',
                autogenerate: { directory: 'guides' },
            },
            {
                label: 'Support & Community',
                items: [
                    { label: 'Built with Polkadart', slug: 'support-community' },
                    { label: 'Telegram', link: 'https://t.me/polkadart', attrs: { target: '_blank', class: 'external' } },
                    {
                        label: 'Github',
                        link: 'https://github.com/leonardocustodio/polkadart',
                        attrs: { target: '_blank', class: 'external' },
                    },
                ],
            },
            {
                label: 'References',
                items: [
                    {
                        label: 'polkadart',
                        badge: { text: 'v0.4.7', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/polkadart/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                    {
                        label: 'polkadart_cli',
                        badge: { text: 'v0.4.3', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/polkadart_cli/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                    {
                        label: 'polkadart_keyring',
                        badge: { text: 'v0.4.4', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/polkadart_keyring/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                    {
                        label: 'polkadart_scale_codec',
                        badge: { text: 'v1.2.1', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/polkadart_scale_codec/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                    {
                        label: 'secp256k1_ecdsa',
                        badge: { text: 'v0.4.1', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/secp256k1_ecdsa/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                    {
                        label: 'sr25519',
                        badge: { text: 'v0.4.1', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/sr25519/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                    {
                        label: 'ss58',
                        badge: { text: 'v1.1.3', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/ss58/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                    {
                        label: 'substrate_bip39',
                        badge: { text: 'v0.4.1', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/substrate_bip39/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                    {
                        label: 'substrate_metadata',
                        badge: { text: 'v1.2.3', class: 'package-badge' },
                        link: 'https://pub.dev/documentation/substrate_metadata/latest',
                        attrs: { target: '_blank', class: 'external' },
                    },
                ],
            },
        ],
        components: {
            Head: './src/components/starlight/Head.astro',
        },
        customCss: [
            './src/assets/tailwind.css',
            './src/assets/custom.scss',
            './src/assets/landing.css',
        ],
		})],
});