import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeTab from './screens/WelcomeTab';
import PlaceholderTab from './screens/PlaceholderTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={WelcomeTab} />
        <Tab.Screen name="Labs" component={PlaceholderTab} />
        <Tab.Screen name="About" component={PlaceholderTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}