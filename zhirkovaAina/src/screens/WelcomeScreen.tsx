import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать 👋</Text>
      <Text style={styles.subtitle}>Лабораторные по React Native</Text>
      <Text style={styles.hint}>Открой вкладку Labs — там будет счётчик</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 24 },
  hint: { fontSize: 14, color: '#999' },
});