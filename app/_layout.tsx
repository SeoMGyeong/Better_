import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="CategoryScreen" />
      <Stack.Screen name="ProfileScreen" />
    </Stack>
  );
};

export default RootLayout;
