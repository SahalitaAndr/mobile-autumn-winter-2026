import {View, StyleSheet, Text} from 'react-native';

export default function About() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Обо мне</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>ФИО: Попова Кундэлинэ</Text>
                <Text style={styles.text}>Группа: Б-ФИИТ-23</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 22,
    },
    textContainer:{
        flex: 1,
        paddingTop:40,
    },
    text:{
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3031',
        textAlign: 'center',
        margin: 8,

    },
    title:{
        fontSize: 28,
        fontWeight: '700',
        color: '#1a1a1a',
        paddingTop: 100,
    }
})