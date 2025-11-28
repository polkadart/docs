<template>
  <ClientOnly>
    <div id="docsearch" class="md:[&_.DocSearch-Button]:!text-lg md:[&_.DocSearch-Button]:!w-[400px]"></div>
    <template #fallback>
      <!-- Placeholder during SSR to prevent layout shift -->
      <div class="h-10 md:w-[400px]"></div>
    </template>
  </ClientOnly>
</template>

<script setup>
import { useScriptNpm } from '#imports'

const { onLoaded } = useScriptNpm({
  packageName: '@docsearch/js',
  version: 'beta',
  file: 'dist/umd/index.js',
  bundle: true,
})

// Get Algolia config from runtime config
const { public: { algolia } } = useRuntimeConfig()

// Initialize DocSearch when the script is loaded
onLoaded(() => {
  if (window.docsearch) {
    window.docsearch({
      container: '#docsearch',
      appId: algolia.appId,
      indexName: algolia.indexName,
      apiKey: algolia.apiKey,
      askAi: algolia.askAi,
      insights: true,
    })
  }
})
</script>
