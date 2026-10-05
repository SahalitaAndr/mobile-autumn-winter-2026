# После пары 3 — ДЗ до пары 4

<div align="center">

![after para 3](./images/doodle-after-para3.png)

**До пары 4:** добить счётчик и TextInput, написать и сделать `useEffect`-лабу.

</div>

---

## Что сделать

1. **Добить счётчик**, если на паре не успели  
   → [`../usestate-lab/usestate-lab.md`](../usestate-lab/usestate-lab.md)  
   → файл `SPECS/lab-usestate.md` + экран в Tabs

2. **TextInput mini** (если начали на паре — довести; если нет — сделать дома)  
   → [`../text-input/text-input.md`](../text-input/text-input.md)  
   → `SPECS/lab-textinput.md`

3. **Блок в README проекта** — секция «Пара 3» (что сделали: Counter, TextInput, спеки)

4. **Главное ДЗ:** написать и реализовать  
   `SPECS/lab-useeffect.md`  
   → теория и варианты: [`../use-effect/use-effect.md`](../use-effect/use-effect.md)  
   Таймер **или** «загрузка → 3 фейковых пункта». Без реального API.

5. Запушить в свою папку `фамилияИмя` (lowerCamelCase) и быть готовым показать на паре 4.

---

## Пример блока README «Пара 3»

```markdown
## Пара 3

- [x] Лаба useState: CounterScreen в Tabs (`SPECS/lab-usestate.md`)
- [x] Controlled TextInput (`SPECS/lab-textinput.md`)
- [x] Лаба useEffect: таймер / фейк-список (`SPECS/lab-useeffect.md`)
```

---

## Чеклист готовности к паре 4

- [ ] Счётчик работает, `−` ≥ 0, есть в Tabs
- [ ] Есть `SPECS/lab-usestate.md`
- [ ] TextInput controlled (`value` + `onChangeText`)
- [ ] Есть `SPECS/lab-textinput.md` (если делали mini)
- [ ] Есть `SPECS/lab-useeffect.md` + рабочий экран
- [ ] У interval/timeout есть cleanup
- [ ] В README проекта есть блок «Пара 3»
- [ ] PR / push в свою папку курса виден

---

## Плюсы (по желанию)

- Красивее стили счётчика / поля (не ломая спеку)
- На Welcome и имя, и счётчик на разных табах
- Короткий комментарий в спеке: *зачем* нужен cleanup
- Скрин экрана в PR

---

## Анонс пары 4

Углубим **effects** и перейдём к **спискам** (`FlatList`): как показывать много пунктов без боли.  
Поэтому фейк-список из ДЗ — хороший разогрев, но настоящий список разберём вместе.

---

## Ссылки

- Интро `useEffect`: [`../use-effect/use-effect.md`](../use-effect/use-effect.md)
- Лаба счётчика: [`../usestate-lab/usestate-lab.md`](../usestate-lab/usestate-lab.md)
