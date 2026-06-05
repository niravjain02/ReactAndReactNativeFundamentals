import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailScreen from './screens/UserDetailScreen';
import UserListScreen from './screens/UserListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer keeps track of the current screen and navigation history.
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="UserList">
        {/* Each Stack.Screen registers a route name with the component to show. */}
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: 'User Directory' }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ title: 'User Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
