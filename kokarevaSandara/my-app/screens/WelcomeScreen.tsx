import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать</Text>
      <Text style={styles.subtitle}>Мобильная разработка · СВФУ</Text>
      <Pressable style={styles.button} onPress={() => Alert.alert('Поехали')}>
        <Text style={styles.buttonText}>Начать</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 24 },
  button: {
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});