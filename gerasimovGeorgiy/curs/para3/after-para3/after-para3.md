# После пары 3 — ДЗ до следующей пары

<div align="center">

![after para 3](./images/doodle-after-para3.png)

**До следующей пары:** добить счётчик и TextInput, `useEffect`-лабу и **просмотр постов** с сервера.

</div>

---

## Что сделать

1. **Добить счётчик**, если на паре не успели  
   → [`../usestate-lab/usestate-lab.md`](../usestate-lab/usestate-lab.md)  
   → файл `SPECS/lab-usestate.md` + экран в Tabs

2. **TextInput mini** (если начали на паре — довести; если нет — сделать дома)  
   → [`../text-input/text-input.md`](../text-input/text-input.md)  
   → `SPECS/lab-textinput.md`

3. **`useEffect`-лаба**  
   → [`../use-effect/use-effect.md`](../use-effect/use-effect.md)  
   → `SPECS/lab-useeffect.md`  
   Таймер **или** «загрузка → 3 фейковых пункта».

4. **Просмотр постов** (главное сетевое ДЗ)  
   → [`../api/api.md`](../api/api.md)  
   → список: [`../posts-list/posts-list.md`](../posts-list/posts-list.md)  
   → один пост: [`../post-view/post-view.md`](../post-view/post-view.md)  
   Только `GET`. Создавать, менять и удалять посты **не нужно**.

5. **Блок в README проекта** — секция «Пара 3»

6. Запушить в свою папку `фамилияИмя` (lowerCamelCase).

---

## Пример блока README «Пара 3»

```markdown
## Пара 3

- [x] Лаба useState: CounterScreen в Tabs (`SPECS/lab-usestate.md`)
- [x] Controlled TextInput (`SPECS/lab-textinput.md`)
- [x] Лаба useEffect: таймер / фейк-список (`SPECS/lab-useeffect.md`)
- [x] Просмотр списка постов (`SPECS/lab-posts.md`)
- [x] Просмотр одного поста (`SPECS/lab-post-view.md`)
```

---

## Чеклист готовности к следующей паре

- [ ] Счётчик работает, `−` ≥ 0, есть в Tabs
- [ ] Есть `SPECS/lab-usestate.md`
- [ ] TextInput controlled (`value` + `onChangeText`)
- [ ] Есть `SPECS/lab-textinput.md` (если делали mini)
- [ ] Есть `SPECS/lab-useeffect.md` + рабочий экран
- [ ] У interval/timeout есть cleanup
- [ ] `api.ts` с `getPosts` и `getPost`
- [ ] Вкладка Posts: список с сервера, loading / error / пусто
- [ ] Тап по карточке открывает один пост (`GET /posts/{id}`)
- [ ] Нет формы создания поста
- [ ] В README проекта есть блок «Пара 3»
- [ ] PR / push в свою папку курса виден

---

## Плюсы (по желанию)

- Pull-to-refresh на списке
- Красивее стили счётчика / поля / карточек (не ломая спеку)
- Короткий комментарий в спеке: *зачем* нужен cleanup
- Скрин экранов в PR

---

## Ссылки

- Интро `useEffect`: [`../use-effect/use-effect.md`](../use-effect/use-effect.md)
- Лаба счётчика: [`../usestate-lab/usestate-lab.md`](../usestate-lab/usestate-lab.md)
- API: [`../api/api.md`](../api/api.md)

Проверяй в **Expo Go на телефоне** (или эмуляторе). В браузере запросы к API могут не пройти из‑за CORS. Если сервер не отвечает — проверь `/health` и напиши в чат.

---

*Дедлайн — до начала следующей пары, если препод не сказал иначе.*
