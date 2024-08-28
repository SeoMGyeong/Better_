// app/_layout.tsx
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CartProvider } from './CartProvider';
import ProfileScreen from './ProfileScreen';
import HomeScreen from '../screens';
import CategoryScreen from '../screens/CategoryScreen';
import SignInScreen from '../screens/SignInScreen';
import ProductScreen from './ProductScreen';

// Stack Navigator와 Bottom Tab Navigator 생성
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ProfileStack 컴포넌트 생성
function ProfileStack() {
  return (
    <Stack.Navigator>
      {/* SignInScreen 스택 */}
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      {/* ProfileScreen 스택 */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      {/* ProductScreen 스택 */}
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CartProvider>
      <NavigationContainer
        independent={true}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        {/* Bottom Tab Navigator 설정 */}
        <Tab.Navigator
          initialRouteName="Home" // 초기 화면을 "Home"으로 설정
        >
          {/* CategoryScreen 탭 */}
          <Tab.Screen
            name="Category"
            component={CategoryScreen}
            options={{
              tabBarIcon: () => <Text>📚</Text>,
            }}
          />
          {/* HomeScreen 탭 */}
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => <Text>🏠</Text>,
            }}
          />
          {/* ProfileStack 탭 */}
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              tabBarIcon: () => <Text>👤</Text>,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default RootLayout;
