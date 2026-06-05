import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailScreen from './screens/UserDetailScreen';
import UserListScreen from './screens/UserListScreen';

// createNativeStackNavigator builds a stack of screens for React Native.
// Each new screen is placed on top of the previous screen.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer stores navigation state and connects the app to navigation behavior.
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="UserList">
        {/* Screen registration gives each screen a name React Navigation can use. */}
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: 'User Directory' }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ title: 'User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
