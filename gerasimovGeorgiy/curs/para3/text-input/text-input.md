# Пара 3 · TextInput как controlled state

<div align="center">

![TextInput](./images/doodle-text-input.png)

**Поле ввода = state.**  
`value` показывает, `onChangeText` обновляет.

</div>

---

## Идея

В React Native «правильное» поле — **controlled**:

```tsx
const [name, setName] = useState('');

<TextInput
  value={name}
  onChangeText={setName}
  placeholder="Ваше имя"
/>
```

| Проп | Роль |
|---|---|
| `value` | что сейчас в поле (из state) |
| `onChangeText` | вызвать `setName` при каждом символе |

Без `value` поле живёт своей жизнью (uncontrolled) — на курсе так **не делаем**.

---

## Mini-lab

Вариант A — на Welcome: поле имени + приветствие.  
Вариант B — простой экран «Привет, {name}».

```tsx
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function NameScreen() {
  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Как тебя зовут?</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Имя"
          autoCapitalize="words"
        />
        <Text style={styles.hello}>
          {name.trim() ? `Привет, ${name.trim()}!` : 'Привет!'}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  label: { fontSize: 18, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  hello: { fontSize: 22, fontWeight: '600' },
});
```

### KeyboardAvoidingView (кратко)

На iOS клавиатура может наехать на поле. Обертка `KeyboardAvoidingView` + `behavior="padding"` часто помогает. На Android поведение другое — достаточно упомянуть и не уходить вглубь на этой паре.

---

## SDD mini-spec

`SPECS/lab-textinput.md`:

```text
Цель: controlled TextInput на useState.

Стек: Expo + TypeScript.
Экран: Welcome с полем имени ИЛИ отдельный NameScreen.
UI: TextInput + текст «Привет, {name}» (пустое имя → просто «Привет!»).
Поведение: value из state; onChangeText обновляет state.
Ограничения: useState + StyleSheet; без форм-библиотек.
Готово, если: ввод сразу отражается в приветствии; поле controlled.
Не делаем: отправка на сервер, валидация email, маски ввода.
```

---

## Acceptance checklist

- [ ] Есть `SPECS/lab-textinput.md`
- [ ] `useState` для строки
- [ ] У `TextInput` есть и `value`, и `onChangeText`
- [ ] Приветствие меняется при вводе
- [ ] Код можно показать на паре / в PR

---

## Частые ошибки

| Ошибка | Почему плохо |
|---|---|
| Нет пропа `value` | Uncontrolled input — state «не хозяин» |
| `onChange` вместо `onChangeText` | В RN нужен `onChangeText` (строка) |
| Пишут в DOM/`ref` вместо state | Не тот ментальный модель для RN |
| Забыли импорт `TextInput` | Красный экран |

---

## ИИ-промпт (опционально)

```text
Expo + TypeScript.
Сделай экран с controlled TextInput по SPECS/lab-textinput.md.
Только useState + StyleSheet. Можно KeyboardAvoidingView.
Без API и библиотек форм.
```

---

## Ссылки

- Лаба счётчика: [`../usestate-lab/usestate-lab.md`](../usestate-lab/usestate-lab.md)
- [TextInput](https://reactnative.dev/docs/textinput)
