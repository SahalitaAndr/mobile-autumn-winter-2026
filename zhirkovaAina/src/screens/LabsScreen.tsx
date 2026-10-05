import { View, Text, StyleSheet } from 'react-native';

export default function LabsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Скоро: useState</Text>
      <Text style={styles.subtitle}>Здесь появится экран-счётчик</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: '600' },
  subtitle: { fontSize: 15, color: '#666', marginTop: 8 },
});