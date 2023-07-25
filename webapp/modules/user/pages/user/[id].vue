<script setup lang="ts">
import { useUserDetailPage } from '~/modules/user/composables/pages/UserDetail'

const { user, pending, error, router } = await useUserDetailPage()
</script>

<template>
  <div v-if="pending" class="py-10">
    <div class="bg-gray-300 h-5 mb-4 animate-pulse rounded-lg max-w-2xl mx-auto" />
    <div class="bg-gray-300 h-3 mb-10 animate-pulse rounded-lg max-w-xs mx-auto" />
    <div class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg ml-14" />
    <div v-for="i in 6" :key="i" class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg" />
    <div class="bg-gray-300 h-4 mb-6 animate-pulse rounded-lg max-w-2xl" />
    <div class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg ml-14" />
    <div v-for="i in 5" :key="i" class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg" />
    <div class="bg-gray-300 h-4 mb-10 animate-pulse rounded-lg max-w-md" />
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>
  <div v-else-if="user" class="mx-auto py-5 lg:py-10 px-6 md:max-w-xl">
    <UserItem :user="user" />
    <button class="mt-10 block mx-auto bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" @click="router.replace('/')">
      Go Back
    </button>
  </div>
</template>
