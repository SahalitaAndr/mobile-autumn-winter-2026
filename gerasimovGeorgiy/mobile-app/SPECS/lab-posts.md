Goal: PostsScreen shows posts from the course API.

Stack: Expo + TypeScript, fetch, useEffect, useState, FlatList.
Source: GET /api/v1/posts (getPosts from api.ts).
UI: card = bold title + body + date.
States: loading → ActivityIndicator; error → text + Retry; empty → No posts yet.
Done when: the list loads in Expo Go, all three states work, Posts tab exists.
Skip: create/delete (next step), auth, libraries (axios, react-query).
