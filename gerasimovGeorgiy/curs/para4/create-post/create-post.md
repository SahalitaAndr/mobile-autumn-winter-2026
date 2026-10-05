# Пара 4 · Создание поста

**Цель:** форма «Новый пост» — два поля и кнопка «Опубликовать». После отправки пост появляется в списке.

Нужно: controlled `TextInput` (пара 3) + `createPost` из `api.ts`.

---

## Спека — `SPECS/lab-create-post.md`

```text
Цель: экран CreatePostScreen создаёт пост через API.

UI: TextInput «Заголовок», TextInput «Текст» (multiline), кнопка «Опубликовать».
Поведение:
- пустые поля → кнопка неактивна (или Alert «Заполни оба поля»);
- во время отправки кнопка неактивна, текст «Отправка…»;
- успех → очистить поля, Alert «Готово»;
- ошибка → Alert с текстом ошибки.
Ограничения: fetch через createPost, без библиотек форм.
Готово, если: пост виден в списке (после обновления) и в Swagger.
Не делаем: редактирование, удаление чужих постов, авторизацию.
```

---

## Код — `screens/CreatePostScreen.tsx`

```tsx
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import { createPost } from '../api';

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);

  const canSend = title.trim() !== '' && content.trim() !== '' && !sending;

  async function onSubmit() {
    if (!canSend) return;
    setSending(true);
    try {
      await createPost(title.trim(), content.trim());
      setTitle('');
      setContent('');
      Alert.alert('Готово', 'Пост опубликован');
    } catch (e) {
      Alert.alert('Ошибка', e instanceof Error ? e.message : 'Не удалось отправить');
    } finally {
      setSending(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Заголовок (начни с фамилии)"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Текст поста"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Pressable
        style={[styles.btn, !canSend && styles.btnDisabled]}
        onPress={onSubmit}
        disabled={!canSend}
      >
        <Text style={styles.btnText}>{sending ? 'Отправка…' : 'Опубликовать'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 12, fontSize: 16 },
  multiline: { minHeight: 120, textAlignVertical: 'top' },
  btn: { backgroundColor: '#111', padding: 14, borderRadius: 12, alignItems: 'center' },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
```

---

## Как увидеть пост в списке

Самый простой путь — «потянуть вниз» на вкладке Posts (см. плюс в `posts-list`).

Чуть лучше — обновлять список, когда вкладка снова становится активной:

```tsx
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

useFocusEffect(
  useCallback(() => {
    load();
  }, [])
);
```

(вместо `useEffect` в `PostsScreen`)

---

## Чек-лист

- [ ] `createPost` в `api.ts`
- [ ] `screens/CreatePostScreen.tsx` во вкладках (или кнопка «+» на Posts)
- [ ] Поля controlled: есть `value` и `onChangeText`
- [ ] Пустое не отправляется
- [ ] Во время отправки кнопка неактивна
- [ ] Пост виден в списке и в Swagger
- [ ] `SPECS/lab-create-post.md`

---

## Частые ошибки

| Ошибка | Что будет |
|---|---|
| Нет `Content-Type: application/json` | сервер вернёт 400 |
| `body: { title, content }` без `JSON.stringify` | 400 |
| Отправили пустой `title` | 400 «поле обязательно» |
| Двойной тап по кнопке | два одинаковых поста — блокируй через `sending` |

> Пиши в заголовке свою фамилию и не удаляй чужие посты — база общая.
