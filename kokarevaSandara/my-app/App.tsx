import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';
import CounterScreen from './screens/CounterScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'home-outline';
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Labs') {
              iconName = focused ? 'folder' : 'folder-outline';
            }
            else if (route.name === 'Counter') {
              iconName = focused ? 'timer' : 'timer-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Labs" component={PlaceholderScreen} />
        <Tab.Screen name="Counter" component={CounterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}