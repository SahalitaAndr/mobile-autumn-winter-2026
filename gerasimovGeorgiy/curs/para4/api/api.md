# Пара 4 · API постов

Документация: [Swagger](http://185.233.185.109:8080/swagger/index.html) — там можно нажать **Try it out** и отправить запрос прямо из браузера.

## Эндпоинты

| Метод | Путь | Что делает | Ответ |
|---|---|---|---|
| GET | `/health` | сервер жив? | `{"status":"ok"}` |
| GET | `/api/v1/posts` | все посты, новые сверху | `Post[]` |
| GET | `/api/v1/posts/{id}` | один пост | `Post` / 404 |
| POST | `/api/v1/posts` | создать | `201` + `Post` |
| PUT | `/api/v1/posts/{id}` | изменить | `Post` |
| DELETE | `/api/v1/posts/{id}` | удалить | `204` |

`POST` и `PUT` принимают JSON: `{ "title": "...", "content": "..." }` — **оба поля обязательны**, иначе `400`.  
Ошибка приходит так: `{ "error": "пост не найден" }`.

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

export async function createPost(title: string, content: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content }),
  });
  if (!res.ok) throw new Error(`Ошибка ${res.status}`);
  return res.json();
}
```

## Правила общей базы

- Сервер **один на всех** — посты видят все.
- В `title` пиши свою фамилию: `«Иванов: мой первый пост»`.
- Чужие посты **не удаляй и не меняй**.

> Запускай в **Expo Go на телефоне**. В браузере запросы могут упасть из-за CORS — это настройка сервера, не твоя ошибка.
