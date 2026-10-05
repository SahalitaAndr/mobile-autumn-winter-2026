import { View, Text, StyleSheet } from 'react-native';

export default function PlaceholderTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Скоро: useState</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: { fontSize: 16, color: '#666' },
});