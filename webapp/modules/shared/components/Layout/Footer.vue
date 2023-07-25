<script setup lang="ts">
const appName = useAppName()
</script>

<template>
  <footer>
    <div
      class="container text-center md:text-left px-4 py-5 mx-auto flex flex-col sm:flex-row justify-center gap-2 sm:items-center"
    >
      <NuxtLink
        to="/"
        class="text-xs antialiased"
      >
        {{ appName }}
      </NuxtLink>
    </div>
  </footer>
</template>
