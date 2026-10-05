# Пара 3 · Лаба: просмотр списка постов

**Цель:** вкладка `Posts` — при открытии грузит посты с сервера и показывает их списком.

Боевой сервер: [Swagger](http://185.233.185.109:8080/swagger/index.html) · база `http://185.233.185.109:8080/api/v1`  
Список: `GET http://185.233.185.109:8080/api/v1/posts`

Нужно: табы (пара 2), `useState`, `useEffect`.

---

## Идея

```text
экран открылся → useEffect([]) → fetch → setPosts(данные) → FlatList перерисовался
```

Пока данные едут — показываем спиннер. Если упало — текст ошибки и кнопку «Повторить».

Создавать посты не нужно: только **смотрим** то, что уже есть на сервере.

---

## Спека — `SPECS/lab-posts.md`

```text
Цель: экран PostsScreen показывает посты с API курса.

Стек: Expo + TypeScript, fetch, useEffect, useState, FlatList.
Источник: GET http://185.233.185.109:8080/api/v1/posts (функция getPosts из api.ts).
UI: карточка = заголовок (жирный) + текст + дата.
Состояния: загрузка → ActivityIndicator; ошибка → текст + «Повторить»; пусто → «Постов нет».
Готово, если: список грузится в Expo Go, есть все три состояния, экран во вкладке Posts.
Не делаем: создание, редактирование, удаление, авторизацию, библиотеки (axios, react-query).
```

---

## Код — `screens/PostsScreen.tsx`

```tsx
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { getPosts, Post } from '../api';

export default function PostsScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Не удалось загрузить');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <Pressable style={styles.btn} onPress={load}>
          <Text style={styles.btnText}>Повторить</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text style={styles.empty}>Постов нет</Text>}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
          <Text style={styles.date}>{new Date(item.created_at).toLocaleString('ru-RU')}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  list: { padding: 16, gap: 12 },
  card: { backgroundColor: '#f4f4f5', borderRadius: 12, padding: 14 },
  title: { fontSize: 17, fontWeight: '700', marginBottom: 4 },
  content: { fontSize: 15, color: '#333' },
  date: { fontSize: 12, color: '#888', marginTop: 8 },
  error: { color: '#c00', marginBottom: 12, textAlign: 'center' },
  empty: { textAlign: 'center', color: '#888', marginTop: 40 },
  btn: { backgroundColor: '#111', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 10 },
  btnText: { color: '#fff', fontWeight: '600' },
});
```

Во вкладках:

```tsx
<Tab.Screen name="Posts" component={PostsScreen} />
```

Дальше: тап по карточке → [просмотр одного поста](../post-view/post-view.md).

---

## Плюс: потянуть вниз — обновить

```tsx
const [refreshing, setRefreshing] = useState(false);

<FlatList
  refreshing={refreshing}
  onRefresh={async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  }}
  ...
/>
```

---

## Чек-лист

- [ ] `api.ts` с `BASE_URL` и `getPosts`
- [ ] `screens/PostsScreen.tsx`
- [ ] `fetch` вызывается в `useEffect(..., [])`
- [ ] Есть loading, error, пустой список
- [ ] `FlatList` с `keyExtractor`
- [ ] Вкладка Posts в табах
- [ ] `SPECS/lab-posts.md`
- [ ] Нет `createPost` и формы создания

---

## Частые ошибки

| Ошибка | Что будет |
|---|---|
| `fetch` прямо в теле компонента | бесконечные запросы: setState → рендер → fetch → … |
| Забыли `[]` у `useEffect` | то же самое |
| `posts.map` в `ScrollView` вместо `FlatList` | работает, но тормозит на больших списках |
| Нет `keyExtractor` / ключ = индекс | предупреждения и баги при обновлении |
| Не проверили `res.ok` | 404/500 «превращается» в странные данные |
| Запуск в браузере | ошибка CORS — запускай в Expo Go |
| `useEffect(async () => …)` | так нельзя: эффект не может быть async. Внутри вызывай async-функцию |

---

## ИИ-промпт

```text
Expo + TypeScript, React Navigation Bottom Tabs.
Сделай PostsScreen строго по спеке ниже. Используй готовый api.ts (вставлю).
Только fetch + useEffect + useState + FlatList, без библиотек.
Только GET, без создания постов.
[вставь спеку и api.ts]
```

Будь готов объяснить на защите: **почему `fetch` в `useEffect` и зачем `[]`.**
