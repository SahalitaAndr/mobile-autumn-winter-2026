import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Жиркова Аина</Text>
      <Text style={styles.subtitle}>Группа ИВТ-23-2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: '600' },
  subtitle: { fontSize: 15, color: '#666', marginTop: 8 },
});