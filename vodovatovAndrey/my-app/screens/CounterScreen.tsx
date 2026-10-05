import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Счетчик</Text>

      <View style={styles.counterBox}>
        <Text style={styles.counter}>{count}</Text>
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={[styles.button, styles.plusButton]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.minusButton]}
          onPress={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          <Text style={styles.buttonText}>−</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.resetButton]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
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

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 25,
  },

  counterBox: {
    width: 150,
    height: 150,
    backgroundColor: "#FFD21F",
    borderWidth: 3,
    borderColor: "#111111",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  counter: {
    fontSize: 60,
    fontWeight: "800",
    color: "#111111",
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
  },

  button: {
    minWidth: 70,
    height: 50,
    borderWidth: 2,
    borderColor: "#111111",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  plusButton: {
    backgroundColor: "#8BE28B",
  },

  minusButton: {
    backgroundColor: "#FF8A8A",
  },

  resetButton: {
    backgroundColor: "#BFA0F5",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
  },
});
