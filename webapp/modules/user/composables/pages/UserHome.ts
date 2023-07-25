import type { Ref } from 'vue'
import type { User } from '~/modules/user/types'

export async function useUserHomePage() {
  const search = ref<string>('')

  const { data, pending, error } = await useUserStates().value

  const users: Ref<User[]> = computed(() => {
    if (!data.value)
      return []

    if (!search.value)
      return data.value

    return data.value.filter((user: User) => {
      return (
        user.first_name.toLowerCase().includes(search.value.toLowerCase())
        || user.last_name.toLowerCase().includes(search.value.toLowerCase())
      )
    })
  })

  const totalUsers: Ref<number> = computed(() => {
    return users.value.length
  })

  useHead({
    title: 'Users',
  })

  return {
    search,
    users,
    totalUsers,
    pending,
    error,
  }
}
