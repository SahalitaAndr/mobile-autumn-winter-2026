import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Seconds on screen</Text>
      <Text style={styles.value}>{seconds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  label: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  value: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});
