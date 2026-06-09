import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import type { User } from './src/models/User';
import UserDetailScreen from './src/screens/UserDetailScreen';
import UserListScreen from './src/screens/UserListScreen';
import { colors, typography } from './src/theme';

// Navigation params describe exactly what data every screen can receive.
export type RootStackParamList = {
  UserList: undefined;
  UserDetail: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // The capstone keeps app setup here while screens, data, and UI live in src/.
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            color: colors.text,
            fontSize: typography.sizes.title,
            fontWeight: typography.weights.bold,
          },
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
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
