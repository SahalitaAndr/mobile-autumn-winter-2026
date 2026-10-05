import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';

import {useState} from 'react';

export default function CounterScreen() {
    const [count, setCount] = useState<number>(0);

    const incr = () => setCount(prev => prev + 1);
    const decr = () => setCount(prev => Math.max(prev - 1, 0))
    const reset = () => setCount(0);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Счетчик</Text>
        <Text style={styles.counter}>{count}</Text>

        <View style={styles.row}>
            <Pressable style={styles.button} onPress={decr}>
            <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={incr}>
            <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>

        <Pressable style={styles.resetButton} onPress={reset}>
            <Text style={styles.resetText}>Сбросить</Text>
        </Pressable>

        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
        color: '#333',
    },
    counter: {
        fontSize: 96,
        fontWeight: 'bold',
        color: '#0f7378',
        marginBottom: 40,
    },
    row: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 20,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#0f7378',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        lineHeight: 40,
    },
    resetButton: {
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#0f7378',
    },
    resetText: {
        color: '#0f7378',
        fontSize: 16,
        fontWeight: '600',
    },
});
