import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="CategoryScreen" />
      <Stack.Screen name="ProfileScreen" />
    </Stack>
  );
}
