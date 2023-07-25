export async function useUserDetailPage() {
  const route = useRoute()
  const router = useRouter()

  const { data, pending, error } = await useUserServices().get(+route.params.id)

  if (error.value)
    throw createError({ statusCode: 404, statusMessage: 'User not found', fatal: true })

  const userName = computed(() => `${data.value?.first_name} ${data.value?.last_name}`)

  useHead({
    title: `${userName.value || 'User'}`,
  })

  return {
    user: data,
    userName,
    pending,
    error,
    router,
  }
}
