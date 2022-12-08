import { UseFetchOptions } from "nuxt/dist/app/composables";

export function useApi<T = any>(path: string, options?: UseFetchOptions<T>) {
  const config = useRuntimeConfig();
  const cookie = useCookie<string>("access_token");

  return useFetch(path, {
    baseURL: config.public.BASE_URL_API,
    headers: {
      Authorization: cookie.value ? `Bearer ${cookie.value}` : "",
    },
    ...options,
  });
}
