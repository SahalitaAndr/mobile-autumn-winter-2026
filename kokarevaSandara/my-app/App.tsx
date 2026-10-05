import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';
import UseStateScreen from './screens/UseStateScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Labs') {
              iconName = focused ? 'folder' : 'folder-outline';
            }
            else if (route.name === 'About') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Labs" component={PlaceholderScreen} />
        <Tab.Screen name="About" component={UseStateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}