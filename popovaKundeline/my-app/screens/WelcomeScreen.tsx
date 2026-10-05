import {View, Text, Pressable, StyleSheet, Alert} from 'react-native';


export default function WelcomeScreen() {
    const handleStart = () => {
    Alert.alert('Alert!', 'Кнопка «Начать» нажата');
    console.log('Кнопка «Начать» нажата');
    };

    return (
        <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Добро пожаловать</Text>
            <Text style={styles.subtitle}>Мобильная разработка</Text>
        </View>

        <Pressable style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Начать</Text>
        </Pressable>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    content: {
        alignItems: 'center',
        marginBottom: 48,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1a1a1a',
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#0f7378',
        paddingHorizontal: 48,
        paddingVertical: 16,
        borderRadius: 12,
        minWidth: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
});