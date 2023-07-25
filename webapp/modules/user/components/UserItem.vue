<script setup lang="ts">
import { useUserItemComponent } from '~/modules/user/composables/components/UserItem'
import type { User } from '~/modules/user/types'

const { user } = defineProps<{
  user: User
}>()

const { userName } = useUserItemComponent(user)
</script>

<template>
  <NuxtLink
    class="bg-white flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    :to="`/user/${user.id}`"
    :title="user.username"
  >
    <UserImage
      :src="user.profile_picture_url"
      class="h-[200px] w-full object-contain bg-gray-100"
    />
    <div class="px-4 py-4 flex flex-col flex-1">
      <h3 class="font-semibold text-lg mt-2 text-gray-800">
        {{ userName }}
      </h3>
      <div class="text-gray-500 text-sm mt-2 flex-1 line-clamp-3">
        {{ user.employment.title }}
      </div>
      <div class="text-gray-500 text-sm mt-2 flex-1 line-clamp-3">
        {{ user.email }}
      </div>
      <div class="text-gray-500 text-sm mt-2 flex-1 line-clamp-3">
        {{ user.date_of_birth }}
      </div>
    </div>
  </NuxtLink>
</template>
