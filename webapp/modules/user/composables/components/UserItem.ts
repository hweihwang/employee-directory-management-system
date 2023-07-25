import type { User } from '~/modules/user/types'

export function useUserItemComponent(user: User) {
  const userName = computed(() => `${user.first_name} ${user.last_name}`)

  return {
    user,
    userName,
  }
}
