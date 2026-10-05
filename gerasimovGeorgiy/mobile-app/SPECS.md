# Спецификация: учебное мобильное приложение

**Status**: Draft  
**Course**: Разработка мобильных приложений, осень–зима 2026  
**Стек**: Expo + TypeScript + React Native

Документ объединяет общую спеку семестра и лабы. Лабы пары 3–4: `SPECS/lab-usestate.md`, `SPECS/lab-textinput.md`, `SPECS/lab-useeffect.md`, `SPECS/lab-posts.md`, `SPECS/lab-create-post.md`.

## Overview

Кроссплатформенное учебное приложение на React Native (Expo). Оно закрывает лабораторные работы курса и даёт клиент к учебному API: регистрация и вход, список пользователей, CRUD постов, настройки профиля и темы.

Запуск: iOS, Android, Expo Go, web. Тёмная тема — основная.

Цвета: фон `#0D0F14`, карточки `#1C2230`, текст `#E6E9EF` / `#9AA4B2`, акцент `#5EEAD4`.

## Сейчас в приложении

Вкладки Bottom Tabs:

| Вкладка | Экран | Статус |
| --- | --- | --- |
| Posts | `PostsScreen` | done: GET posts, FlatList, loading/error/empty |
| Create | `CreatePostScreen` | done: POST new post |
| Counter | `CounterScreen` | done: useState counter |
| Name | `NameScreen` | done: controlled TextInput |
| Timer | `TimerScreen` | done: useEffect + cleanup |
| Hello | `HelloWorldScreen` | done: Lab 0 Hello World |
| About | `AboutScreen` | done: short about the course |

Welcome-экран (`WelcomeScreen`) собран по лабе, но вкладка Home снята: стартовый экран — Counter.

Экраны лежат в `src/screens/`, навигация в `App.tsx`, цвета в `src/theme/colors.ts`.

### Lab 0 — Hello World

Цель: скелет Expo + TypeScript, запуск без правок native-кода.

Готово, если: `npm start` / iOS / Android / web открывают экран Hello World.

### Lab — Welcome + Bottom Tabs

Цель: каркас нижних вкладок.

- Экран Welcome: title, subtitle, Start button → Alert
- Минимум 2–3 вкладки, между ними можно ходить
- Ограничения: View, Text, Pressable/Button, StyleSheet
- Не делаем: сложную навигацию из кнопки, анимации, UI-kit

Текущее состояние: табы есть (Posts / Create / Counter / Name / Timer / Hello / About), Welcome без отдельной вкладки.

### Lab — useState, счётчик

Цель: экран-счётчик на `useState`.

- UI: число по центру; кнопки `+`, `−`, Reset
- Старт с 0; `−` не ниже 0; Reset → 0
- Только `useState` + StyleSheet; без библиотек, AsyncStorage, сервера, Redux/Zustand
- Готово, если: три кнопки работают, экран в Tabs, код объясним

Подробно: `SPECS/lab-usestate.md`.

### Lab — TextInput, controlled state

Цель: поле ввода, которым владеет `useState`.

- Экран `NameScreen`: `TextInput` + текст «Hello, {name}» (empty name → «Hello!»)
- `value` из state, `onChangeText` обновляет state
- Только `useState` + StyleSheet; без форм-библиотек и сервера
- Готово, если: ввод сразу отражается в приветствии, поле controlled

Подробно: `SPECS/lab-textinput.md`.

### Lab — useEffect, таймер

Цель: side effect после отрисовки.

- Вариант 1: секунды с момента открытия экрана
- `useEffect` с `[]` (один раз при mount)
- Cleanup: `clearInterval`, чтобы не тикало после ухода с вкладки
- Без реального fetch/API

Подробно: `SPECS/lab-useeffect.md`.

### Lab — Posts list

Цель: вкладка Posts грузит посты с API курса.

- `getPosts` в `src/api.ts`, `fetch` только внутри эффекта (`useFocusEffect` / `useEffect`)
- `FlatList` + `keyExtractor`
- Состояния: loading, error + Retry, empty
- Pull-to-refresh
- Без axios / react-query / auth

Подробно: `SPECS/lab-posts.md`.

### Lab — Create post

Цель: форма создаёт пост через POST.

- Controlled Title + body, кнопка Publish
- Пустые поля не отправляются; во время отправки кнопка неактивна
- Успех → очистить поля; ошибка → Alert
- В заголовке фамилия (`Gerasimov: …`); чужие посты не трогаем

Подробно: `SPECS/lab-create-post.md`.

## Цели семестра

- Хуки React (`useState`, `useEffect`, `useMemo`) и Zustand на отдельных экранах
- Навигация: стек авторизации и нижние вкладки
- Учебный backend `https://cloud.kit-imi.info`: JWT, refresh, профили, пользователи, посты
- Единый UI и разделение стилей и логики

## Non-goals (v1)

- Собственный backend
- Публикация в сторы
- Push, офлайн-синхронизация
- WebRTC — опциональный P3

## Дальше по курсу

### useEffect / useMemo

Отдельные вкладки: загрузка поста с JSONPlaceholder с отменой запроса; Fibonacci через `useMemo` и фильтрация списка.

### Auth

Регистрация (`name`, `email`, `password`), вход, JWT в AsyncStorage, refresh на 401, восстановление сессии.

### Users / Posts / Settings

Список пользователей (поиск, роль, пагинация), CRUD постов, тема и выход.

### API (пара 4)

Base URL: `http://185.233.185.109:8080/api/v1` (без авторизации).

| Method | Path | Назначение |
| --- | --- | --- |
| GET | `/health` | живость сервера |
| GET | `/posts` | список постов |
| POST | `/posts` | создать пост |

Дальше по семестру (ещё не подключено): `https://cloud.kit-imi.info`.

| Method | Path | Auth | Назначение |
| --- | --- | --- | --- |
| GET | `/api/health` | no | Проверка доступности |
| POST | `/api/auth/register` | no | Регистрация |
| POST | `/api/auth/login` | no | Вход |
| GET | `/api/auth/profile` | yes | Профиль |
| POST | `/api/auth/refresh` | refresh | Обновление токенов |
| POST | `/api/auth/logout` | yes | Выход |
| GET | `/api/auth/users` | yes | Список пользователей |
| GET/POST/PUT/DELETE | `/api/posts` | yes | CRUD постов |
| GET | `/api/posts/my` | yes | Мои посты |
| GET | `/api/webrtc/ice-servers` | yes | ICE (P3) |

## Constraints

| Слой | Выбор |
| --- | --- |
| Runtime | Expo, React Native |
| Language | TypeScript |
| Navigation | React Navigation: bottom tabs (+ stack позже) |
| State | сейчас `useState`; дальше Zustand |
| HTTP | `fetch` (`src/api.ts`); axios later |
| Storage | AsyncStorage |
| Package manager | npm |

## Delivery plan

1. Lab 0 — Expo skeleton, Hello World
2. Welcome + Bottom Tabs
3. useState — счётчик
4. useEffect + fetch posts (course API)
5. useMemo
6. axios + auth + Zustand
7. Users list
8. Posts CRUD
9. Settings, тема, lint
10. Optional — WebRTC

Каждый этап проверяется независимо и не ломает уже сданные экраны.
