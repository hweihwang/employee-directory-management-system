<script setup lang="ts">
import { useUserHomePage } from '~/modules/user/composables/pages/UserHome'

const { totalUsers, users, search, pending, error } = await useUserHomePage()
</script>

<template>
  <div class="p-4 xl:p-0">
    <div class="text-center py-10 md:max-w-5xl md:mx-auto flex justify-between">
      <h1 class="text-xl mb-3 mt-2 font-semibold tracking-normal text-gray-800">
        Total users: {{ totalUsers }}
      </h1>
      <div class="relative sm:w-3/12">
        <Icon
          name="ri-search-line"
          class="text-gray-400 absolute left-3 w-5 h-5 top-2.5"
        />
        <input
          v-model="search"
          type="search"
          placeholder="Search"
          class="
            pl-10
            py-2
            appearance-none
            border-none
            focus:border-none
            focus:ring-0
            rounded-lg
            focus:outline-none
            w-full
          "
        >
      </div>
    </div>
    <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="i in 12" :key="i" class="bg-gray-200 h-56 animate-pulse rounded-lg" />
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else-if="users" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <UserItem v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>
