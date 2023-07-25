<script setup lang="ts">
const appName = useAppName()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appName}` : appName
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: appName,
    },
  ],
})
</script>

<template>
  <Html lang="en" />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
