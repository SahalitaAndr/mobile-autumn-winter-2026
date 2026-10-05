# Пара 3 · Лаба: просмотр одного поста

**Цель:** тап по карточке в списке открывает экран поста. Данные — `GET /api/v1/posts/{id}`.

Нужно: список из [`posts-list`](../posts-list/posts-list.md) и `getPost` из [`api`](../api/api.md).

Создание поста **не делаем**. Только смотрим.

---

## Спека — `SPECS/lab-post-view.md`

```text
Цель: экран PostViewScreen показывает один пост с API курса.

Стек: Expo + TypeScript, fetch, useEffect, useState.
Источник: GET /api/v1/posts/{id} (функция getPost из api.ts).
Навигация: тап по карточке в списке → экран поста.
UI: заголовок, полный текст, дата; кнопка «Назад».
Состояния: загрузка → ActivityIndicator; ошибка / 404 → текст + «Назад».
Готово, если: в Expo Go открывается конкретный пост, id берётся из навигации.
Не делаем: создание, редактирование, удаление, POST/PUT/DELETE.
```

---

## Навигация без лишних библиотек

Самый простой путь на этой паре — **стек внутри вкладки Posts**: список и экран поста.

```tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreen from './screens/PostsScreen';
import PostViewScreen from './screens/PostViewScreen';

const Stack = createNativeStackNavigator();

function PostsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostsList" component={PostsScreen} options={{ title: 'Posts' }} />
      <Stack.Screen name="PostView" component={PostViewScreen} options={{ title: 'Пост' }} />
    </Stack.Navigator>
  );
}

// во вкладках:
<Tab.Screen name="Posts" component={PostsStack} options={{ headerShown: false }} />
```

Пакет: `@react-navigation/native-stack` (обычно уже ставится вместе с навигацией курса).

Если стек ещё не подключён — можно без него: хранить `selectedId` в `PostsScreen` и показывать либо список, либо детальный вид. На защите достаточно любого рабочего варианта.

---

## Тап в списке

В `PostsScreen` оберни карточку в `Pressable` и передай `id`:

```tsx
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation<any>();

<Pressable
  style={styles.card}
  onPress={() => navigation.navigate('PostView', { id: item.id })}
>
  ...
</Pressable>
```

---

## Код — `screens/PostViewScreen.tsx`

```tsx
import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { getPost, Post } from '../api';

export default function PostViewScreen({ route, navigation }: any) {
  const id = route.params.id as number;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await getPost(id);
        if (!cancelled) setPost(data);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Не удалось загрузить');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !post) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error ?? 'Пост не найден'}</Text>
        <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Назад</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.date}>{new Date(post.created_at).toLocaleString('ru-RU')}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 22, fontWeight: '700' },
  date: { fontSize: 12, color: '#888' },
  content: { fontSize: 16, lineHeight: 24 },
  error: { color: '#c00', marginBottom: 12, textAlign: 'center' },
  btn: { backgroundColor: '#111', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 10 },
  btnText: { color: '#fff', fontWeight: '600' },
});
```

Не подставляй пост только из списка: на этом экране нужен **отдельный** запрос `getPost(id)`.

---

## Чек-лист

- [ ] `getPost(id)` в `api.ts`
- [ ] `screens/PostViewScreen.tsx`
- [ ] Тап по карточке открывает пост
- [ ] `fetch` в `useEffect`, зависимость `[id]`
- [ ] Есть loading и ошибка / 404
- [ ] Показаны заголовок, текст, дата
- [ ] `SPECS/lab-post-view.md`
- [ ] Нет формы создания поста

---

## Частые ошибки

| Ошибка | Что будет |
|---|---|
| Показали данные из списка, без `getPost` | лаба не про просмотр с сервера |
| Забыли передать `id` в params | экран пустой или падает |
| `useEffect` без `[id]` | открыли другой пост — данные старые |
| POST «чтобы было что смотреть» | не нужно: на сервере уже есть посты |

---

## ИИ-промпт

```text
Expo + TypeScript, React Navigation.
Сделай PostViewScreen строго по SPECS/lab-post-view.md.
Тап по карточке в PostsScreen открывает этот экран.
Только GET getPost(id), без создания и редактирования.
```
