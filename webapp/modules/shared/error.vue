<script setup lang="ts">
const { error } = defineProps({
  error: Object,
})

useHead({
  title: error?.message || 'Error',
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <Html lang="en" />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-6xl font-bold mb-4">
        {{ error?.statusCode || '500' }}
      </h1>
      <p class="text-lg mb-8">
        {{ error?.message || 'Error' }}
      </p>
      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" @click="handleError">
        Go Back
      </button>
    </div>
  </NuxtLayout>
</template>
