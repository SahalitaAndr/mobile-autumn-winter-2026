import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './src/screens/Posts/PostsScreen';
import CreatePostScreen from './src/screens/CreatePost/CreatePostScreen';
import CounterScreen from './src/screens/Counter/CounterScreen';
import NameScreen from './src/screens/Name/NameScreen';
import TimerScreen from './src/screens/Timer/TimerScreen';
import HelloWorldScreen from './src/screens/HelloWorld/HelloWorldScreen';
import AboutScreen from './src/screens/About/AboutScreen';
import { colors } from './src/theme/colors';

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.background,
    text: colors.textPrimary,
    border: colors.card,
    primary: colors.accent,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.textPrimary,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.card,
          },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarLabelStyle: { fontSize: 11 },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen name="Posts" component={PostsScreen} options={{ title: 'Posts' }} />
        <Tab.Screen name="Create" component={CreatePostScreen} options={{ title: 'Create' }} />
        <Tab.Screen name="Counter" component={CounterScreen} options={{ title: 'Counter' }} />
        <Tab.Screen name="Name" component={NameScreen} options={{ title: 'Name' }} />
        <Tab.Screen name="Timer" component={TimerScreen} options={{ title: 'Timer' }} />
        <Tab.Screen name="Hello" component={HelloWorldScreen} options={{ title: 'Hello' }} />
        <Tab.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
