import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CounterScreen from "./screens/CounterScreen";
import WelcomeScreen from './screens/WelcomeScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';
import AboutScreen from './screens/AboutScreen';

import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={WelcomeScreen}
        options={{
          title: "Главная",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name="About" component={AboutScreen}
        options={{
          title: "Обо мне",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name="Counter" component={CounterScreen} 
        options={{
          title:"Счётчик",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" color={color} size={size}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

