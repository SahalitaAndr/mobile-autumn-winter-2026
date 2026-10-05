Цель: экран с side effect на useEffect + useState.

Стек: Expo + TypeScript.
Вариант 1: таймер (секунды с mount), cleanup clearInterval.
Вариант 2: «загрузка» → через setTimeout показать список из 3 фейковых пунктов.
UI: отдельный экран / вкладка; понятные loading или тикающие секунды.
Ограничения: useEffect + useState + StyleSheet; без реального fetch/API.
Готово, если: эффект с [] работает; есть cleanup где нужен; код объясним.
Не делаем: cloud.kit-imi, Redux, FlatList-оптимизации (это пара 4).

Выбран вариант 1: TimerScreen. Интервал запускается один раз при монтировании
(deps = []). Cleanup `clearInterval` нужен, чтобы таймер не тикал после ухода
с вкладки и не копил лишние интервалы.
