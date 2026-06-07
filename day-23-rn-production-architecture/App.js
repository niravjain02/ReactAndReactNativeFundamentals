import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailScreen from './src/screens/UserDetailScreen';
import UserListScreen from './src/screens/UserListScreen';
import colors from './src/constants/colors';

const Stack = createNativeStackNavigator();

// App.js stays small because its job is only to configure app-wide navigation.
// In a larger app, feature logic belongs in screens, hooks, and services instead.
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
          headerTintColor: colors.primary,
          headerTitleStyle: { color: colors.text },
        }}
      >
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: 'User Directory' }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={({ route }) => ({ title: route.params.user.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
