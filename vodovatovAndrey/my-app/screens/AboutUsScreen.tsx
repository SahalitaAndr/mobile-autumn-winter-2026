import { View, Text, StyleSheet } from "react-native";

export default function AboutUsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>ⓘ</Text>

        <Text style={styles.title}>About</Text>

        <Text style={styles.text}>Здесь пока ничего нет.</Text>

        <Text style={styles.subtitle}>Но я Андрей</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF7",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#BFA0F5",
    borderWidth: 3,
    borderColor: "#111111",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },

  icon: {
    fontSize: 45,
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 10,
  },

  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: "#333333",
    textAlign: "center",
  },
});
