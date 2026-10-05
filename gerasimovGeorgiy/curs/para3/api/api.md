# Пара 3 · API постов (только чтение)

Документация: [Swagger](http://185.233.185.109:8080/swagger/index.html) — там можно нажать **Try it out** и отправить запрос прямо из браузера.

На этой паре нужны **только GET**. POST / PUT / DELETE не используем.

## Эндпоинты для лабы

| Метод | Путь | Что делает | Ответ |
|---|---|---|---|
| GET | `/health` | сервер жив? | `{"status":"ok"}` |
| GET | `/api/v1/posts` | все посты, новые сверху | `Post[]` |
| GET | `/api/v1/posts/{id}` | один пост | `Post` / 404 |

В Swagger видны ещё POST / PUT / DELETE — **их не трогаем**.

## Модель

```ts
export type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string; // ISO-дата
  updated_at: string;
};
```

## `api.ts` — положи в `src/api.ts` (или `api.ts` рядом с `screens/`)

```ts
const BASE_URL = 'http://185.233.185.109:8080/api/v1';

export type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error(`Ошибка ${res.status}`);
  return res.json();
}

export async function getPost(id: number): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error(`Ошибка ${res.status}`);
  return res.json();
}
```

Ошибка с сервера приходит так: `{ "error": "пост не найден" }`.

> Запускай в **Expo Go на телефоне**. В браузере запросы могут упасть из-за CORS — это настройка сервера, не твоя ошибка.
