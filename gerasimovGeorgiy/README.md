# gerasimovGeorgiy

Учебное мобильное приложение курса (React Native + Expo + TypeScript).

Бэкенд лежит рядом сабмодулем: [go-server](https://github.com/arri1/go-server) (`gerasimovGeorgiy/go-server`). Это REST API на Go (CRUD постов, Postgres, Swagger).

## Папки

```
gerasimovGeorgiy/
├── README.md
├── curs/                 # конспекты пар
│   ├── para1/
│   ├── para2/
│   ├── para3/
│   └── para4/
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

## Пара 4

- [x] Course posts API (`src/api.ts`: GET, POST)
- [x] Posts: FlatList, loading / error / empty, pull-to-refresh (`SPECS/lab-posts.md`)
- [x] Create: controlled form → POST (`SPECS/lab-create-post.md`)

## Бэкенд (go-server)

Локально:

```bash
cd go-server
docker compose up --build
```

- API: http://localhost:8080
- Swagger: http://localhost:8080/swagger/index.html

Боевой инстанс: http://185.233.185.109:8080/swagger/index.html
