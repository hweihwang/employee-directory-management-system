<script setup lang="ts">
defineProps<{
  src: string
  baseUri?: {
    type: string
  }
  alt?: string
}>()

const defaultBaseUri = computed(() => useRuntimeConfig().public.baseImageUrl)
</script>

<template>
  <img :src="`${baseUri || defaultBaseUri}${src}`" :alt="alt">
</template>
