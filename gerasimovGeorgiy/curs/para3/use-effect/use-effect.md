# Пара 3 · useEffect — короткий интро (ДЗ)

<div align="center">

![useEffect](./images/doodle-useeffect.png)

**`useEffect` = побочный эффект после отрисовки.**  
Не вместо `useState`, а рядом с ним.

</div>

---

## Зачем это вам

`useState` хранит данные на экране.  
`useEffect` отвечает на вопрос: *«после того как экран нарисовался — что ещё сделать?»*

Примеры side effects:

- запустить таймер
- сделать «загрузку» через `setTimeout` и положить список в state
- подписаться / отписаться (cleanup)

На этой паре — **только интро**. Глубже (и FlatList) — на паре 4.

---

## Идея за минуту

```tsx
import { useEffect, useState } from 'react';

useEffect(() => {
  // код эффекта
}, []); // ← зависимости
```

| Зависимости | Когда эффект |
|---|---|
| `[]` (пустой массив) | **один раз** после монтирования |
| `[x]` | после монтирования и когда `x` изменился |
| нет массива | после **каждого** рендера (осторожно!) |

Для ДЗ достаточно варианта с **`[]`**.

---

## Демо A — таймер тикает

```tsx
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id); // cleanup!
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Секунд на экране</Text>
      <Text style={styles.value}>{seconds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 16, color: '#666', marginBottom: 8 },
  value: { fontSize: 48, fontWeight: '700' },
});
```

**Правило:** для `setInterval` / `setTimeout` с повтором — **обязателен** `return () => clearInterval(id)`, иначе утечка при уходе с экрана.

---

## Демо B — фейковая загрузка списка

```tsx
import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

type Item = { id: string; title: string };

export default function FakeLoadScreen() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const id = setTimeout(() => {
      setItems([
        { id: '1', title: 'Первый пункт' },
        { id: '2', title: 'Второй пункт' },
        { id: '3', title: 'Третий пункт' },
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(id);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text style={styles.hint}>Загрузка…</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Text key={item.id} style={styles.item}>
          • {item.title}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  hint: { marginTop: 12, color: '#666' },
  item: { fontSize: 18, marginVertical: 6 },
});
```

Пока **не** тяните реальный API (`cloud.kit-imi` и т.п. часто только в сети универа). Фейк через `setTimeout` — ок.

---

## Правила (минимум)

1. Эффект **после** render, не вместо.
2. Пустые deps `[]` = один раз при mount.
3. Интервалы / таймеры → **cleanup** в `return`.
4. В эффекте можно вызывать `setState` — так обновляете UI после «загрузки».
5. Не кладите `useEffect` внутрь `if`.

---

## SDD для ДЗ

`SPECS/lab-useeffect.md`:

```text
Цель: экран с side effect на useEffect + useState.

Стек: Expo + TypeScript.
Вариант 1: таймер (секунды с mount), cleanup clearInterval.
Вариант 2: «загрузка» → через setTimeout показать список из 3 фейковых пунктов.
UI: отдельный экран / вкладка; понятные loading или тикающие секунды.
Ограничения: useEffect + useState + StyleSheet; без реального fetch/API.
Готово, если: эффект с [] работает; есть cleanup где нужен; код объясним.
Не делаем: cloud.kit-imi, Redux, FlatList-оптимизации (это пара 4).
```

Выберите **один** вариант (таймер **или** фейк-список).

---

## Acceptance (ориентир)

- [ ] Есть `SPECS/lab-useeffect.md`
- [ ] Экран использует `useEffect` и `useState`
- [ ] Deps = `[]` (mount)
- [ ] Для interval/timeout есть cleanup
- [ ] Нет реального сетевого запроса
- [ ] Экран доступен из навигации / табов

---

## Частые ошибки

| Ошибка | Почему плохо |
|---|---|
| Нет `[]`, эффект на каждый рендер | Лишние таймеры / циклы |
| Забыли `clearInterval` | Тикает после ухода с экрана |
| `fetch` на uni-only API из дома | «Не работает» без сети универа |
| Путают `useEffect` с обработчиком кнопки | Кнопка → `onPress`, не эффект |

---

## ИИ-промпт (опционально)

```text
Expo + TypeScript.
Реализуй экран строго по SPECS/lab-useeffect.md.
Только useEffect + useState + StyleSheet.
Без fetch и сторонних библиотек. Обязателен cleanup для таймера.
```

---

## Ссылки

- [useEffect](https://react.dev/reference/react/useEffect)
- ДЗ целиком: [`../after-para3/after-para3.md`](../after-para3/after-para3.md)
