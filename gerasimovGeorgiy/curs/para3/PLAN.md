# План пары 3 (преподаватель)

**Тема:** живая лаба `useState` (счётчик) → controlled `TextInput` → интро `useEffect` → просмотр постов (`GET`).  
**Длительность:** ~90–100 мин с перерывом.  
**Теория `useState`:** уже в para2 — не читать лекцию заново, только 30-сек напоминание.

Создание постов на этой паре **не делаем**.

---

## Тайминг

| Мин | Что |
|---|---|
| 0–10 | Проверка ДЗ: табы есть? есть ли черновик `SPECS/lab-usestate.md`? |
| 10–40 | Лаба `useState` вместе (экран + Tabs), pair-program |
| 40–55 | Controlled `TextInput` (mini на Welcome или отдельный экран) |
| 55–65 | Перерыв / помощь отстающим |
| 65–80 | Интро `useEffect` + Swagger: `GET /posts`, `GET /posts/{id}` |
| 80–95 | Старт лабы `posts-list` (кто успел — `post-view`), раздать ДЗ |

---

## Как открыть пару (коротко студентам)

> «На прошлой паре — идея `useState` и табы. Сегодня **делаем счётчик руками**, потом поле ввода. Дальше `useEffect` — и те же эффекты, но данные настоящие: **смотрим посты с сервера**. Создавать посты не нужно.»

---

## На что смотреть, ходя по рядам

- Код **не** сваленный только в `App.tsx` — есть файл экрана
- `setCount(c => …)`, а не `count++`
- `−` через `Math.max(0, …)`
- У `TextInput` есть **и** `value`, **и** `onChangeText`
- `fetch` внутри `useEffect` / `useFocusEffect`, не в теле компонента
- Массив зависимостей `[]`
- Три состояния: `loading`, `error`, данные
- `keyExtractor={item => String(item.id)}`
- Базовый URL вынесен в `api.ts`
- Нет `createPost` / POST — только чтение
- Спека `SPECS/lab-usestate.md` хотя бы черновиком
- Папка в репо: `фамилияИмя` (lowerCamelCase)

---

## Материалы

| Файл | Для кого |
|---|---|
| [`README.md`](./README.md) | индекс |
| [`usestate-lab/`](./usestate-lab/usestate-lab.md) | лаба на паре |
| [`text-input/`](./text-input/text-input.md) | mini-lab |
| [`use-effect/`](./use-effect/use-effect.md) | интро + текст ДЗ |
| [`api/`](./api/api.md) | GET-шпаргалка |
| [`posts-list/`](./posts-list/posts-list.md) | просмотр списка |
| [`post-view/`](./post-view/post-view.md) | просмотр одного поста |
| [`after-para3/`](./after-para3/after-para3.md) | домашка до следующей пары |

Обложки уже в `images/` у лаб пары 3.

---

## Риски

- **CORS:** сервер не отвечает на preflight → в браузере (`w`) GET может не пройти. Только Expo Go / эмулятор.
- **HTTP, не HTTPS:** в Expo Go работает; для сборки (`eas build`) понадобится HTTPS — сейчас не трогаем.
- Если кто-то уже сделал счётчик дома — пусть помогает соседу (pair) или делает TextInput / просмотр постов.
