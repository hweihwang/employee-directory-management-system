const service = useUserServices()
export function useUserStates() {
  return useState('users', async () => {
    const { data, error, pending } = await service.all()

    return {
      data,
      error,
      pending,
    }
  })
}
