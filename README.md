# Nuxt3 Layers

Nuxt 3 base layer for normal projects

## Installation

Install nuxt3-layer with npm

```bash
  npm install -D @tamnt-work/nuxt3-layer
```

Install nuxt3-layer with yarn

```bash
  yarn add -D @tamnt-work/nuxt3-layer
```

## Usage

Add to nuxt.config.ts:

```typescript
export default defineNuxtConfig({
  extends: ["@tamnt-work/nuxt3-layer"],
});
```

## Feature

- HTML validator
- Vue use
- Windicss
- Nuxt image
- Sass
- Element Plus UI
- Pinia
- Auto import composables, constants, utils

## Use useFetch with base url + auto add access token to headers

Add url api to .env at root

```env
BASE_URL_API=https://jsonplaceholder.typicode.com
```

To automatically attach the **_access_token_** a to the header, set the value to the cookie with name **_access_token_**

```typescript
const cookie = useCookie("access_token");
cookie.value = "value";
```

To call api with base url + access_token use composable **useApi**

```typescript
const { data, refresh } = await useApi<
  Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>
>("/posts");
```

## Support

For support, email contact@tamnt.work.
