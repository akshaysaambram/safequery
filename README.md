# SafeQuery

SafeQuery is a wrapper around React Query (@tanstack/react-query), which provides a convenient way to handle loading and error states when making server requests. It ensures that the component is not rendered until the data is available, and provides a fallback component when the request fails or is still loading.

## 📦 Installation

```bash
npm i @akshaysaambram/safequery
```

## 🧑‍💻 Usage

```ts
import { SafeQuery } from "@akshaysaambram/safequery";

export function PostsPage() {
  return (
    <SafeQuery queryKey={["posts"]} queryFn={getPosts}>
      {(data) => <Posts posts={data} />}
    </SafeQuery>
  );
}
```

```ts
import { SafeQuery } from "@akshaysaambram/safequery";

export function PostsPage() {
  return (
    <SafeQuery
      queryKey={["posts"]}
      queryFn={getPosts}
      loadingFallback={<div>Loading...</div>}
    >
      {(data) => <Posts posts={data} />}
    </SafeQuery>
  );
}
```

```ts
import { SafeQuery } from "@akshaysaambram/safequery";

export function PostsPage() {
  return (
    <SafeQuery
      queryKey={["posts"]}
      queryFn={getPosts}
      refetchOnMount={false}
      refetchOnWindowFocus={false}
    >
      {(data) => <Posts posts={data} />}
    </SafeQuery>
  );
}
```

## 📄 License

MIT © [Akshay Saambram](https://github.com/akshaysaambram)
