import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import CounterScreen from "./screens/CounterScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: "#fffdf7",
            borderTopWidth: 0,
            height: 100,
            paddingBottom: 40,
            padding: 15,
          },

          tabBarItemStyle: {
            borderWidth: 3,
            borderColor: "#111111",
            borderRadius: 12,
            marginHorizontal: 5,
          },

          tabBarActiveTintColor: "#111111",
          tabBarInactiveTintColor: "#111111",
        }}
      >
        <Tab.Screen
          name="Главная"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Счетчик"
          component={CounterScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flask" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="О нас"
          component={AboutUsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
