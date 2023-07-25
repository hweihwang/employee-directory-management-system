import type { User } from '~/modules/user/types'

export function useUserServices() {
  const all = async () => useUserFetch<null | User[]>('/')

  const get = async (id: number) => useUserFetch<null | User>(`/${id}`)

  return {
    all,
    get,
  }
}
