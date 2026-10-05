# Пара 4 — материалы

Тема: **`useEffect` + `fetch`**: список постов с сервера (`FlatList`), загрузка/ошибка, создание поста.

API курса: [Swagger](http://185.233.185.109:8080/swagger/index.html) · база `http://185.233.185.109:8080/api/v1`

| Папка | Что внутри |
|---|---|
| [api](./api/api.md) | Шпаргалка по API постов + `api.ts` |
| [posts-list](./posts-list/posts-list.md) | Лаба на паре: `PostsScreen` — GET + FlatList + loading/error |
| [create-post](./create-post/create-post.md) | Форма: TextInput → POST, обновить список |
| [after-para4](./after-para4/after-para4.md) | ДЗ до пары 5 |

## Порядок на паре

1. Проверка ДЗ пары 3 (счётчик, `useEffect`-лаба)
2. Открыть Swagger, дёрнуть `GET /posts` руками
3. Лаба `posts-list` вместе
4. `create-post` (кто успел)
5. Раздать ДЗ

> ⚠️ Запускать в **Expo Go на телефоне** (или эмуляторе). В браузере (`w`) запросы могут не пройти: сервер не отдаёт CORS-заголовки.
