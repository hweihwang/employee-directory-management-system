export const useUserFetch: typeof useFetch = (url, options?) => {
  const config = useRuntimeConfig()

  return useFetch(url, {
    baseURL: config.public.baseApiUrl,
    ...options,
  })
}
