# gerasimovGeorgiy

Материалы курса **Разработка мобильного приложения** (React Native + Expo + TypeScript).

## Задания

Все лабы и ДЗ — в [`curs/`](curs):

- [Пара 1](curs/para1) — старт, ИИ, первый PR
- [Пара 2](curs/para2) — JSX, Welcome, Bottom Tabs
- [Пара 3](curs/para3) — useState, TextInput, useEffect, просмотр постов

Не копируй материалы себе в папку. Читай задание здесь, делай работу **в своей** папке `фамилияИмя`.

---

Учебное приложение курса лежит в [`mobile-app/`](mobile-app).  
Бэкенд — сабмодуль [go-server](https://github.com/arri1/go-server) (`go-server/`). REST API на Go (CRUD постов, Postgres, Swagger).

## Папки

```
gerasimovGeorgiy/
├── README.md
├── curs/                 # задания по парам
│   ├── para1/
│   ├── para2/
│   └── para3/
├── go-server/            # git submodule → arri1/go-server
└── mobile-app/           # Expo-проект
    ├── .cursor/          # правила для Cursor
    ├── SPECS.md          # объединённая спецификация
    ├── SPECS/            # lab specs (useState … posts)
    ├── App.tsx           # Bottom Tabs
    └── src/screens/      # Posts, Create, Counter, Name, Timer, Hello, About
```

После клонирования курса подтяни сабмодуль:

```bash
git submodule update --init gerasimovGeorgiy/go-server
```

Или сразу клонируй репозиторий с сабмодулями: `git clone --recurse-submodules git@github.com:arri1/mobile-autumn-winter-2026.git`

## Запуск мобилки

```bash
cd mobile-app
npm install
npm run ios      # iOS Simulator
npm run android  # Android Emulator
npm run web      # браузер
npm start        # Expo Go
```

Для iOS нужен Xcode, для Android — Android Studio. Можно открыть проект в Expo Go по QR-коду.

## Пара 3

- [x] Лаба useState: CounterScreen в Tabs (`SPECS/lab-usestate.md`)
- [x] Controlled TextInput: NameScreen (`SPECS/lab-textinput.md`)
- [x] Лаба useEffect: таймер с cleanup (`SPECS/lab-useeffect.md`)
- [x] Просмотр списка постов (`SPECS/lab-posts.md`)

## Бэкенд (go-server)

Боевой инстанс: http://185.233.185.109:8080/swagger/index.html
