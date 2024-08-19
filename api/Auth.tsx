import { router } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '@react-native-firebase/auth';

export const SignIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
  try {
    auth().signInWithEmailAndPassword(email, password);
    router.push('/(tabs)');
  } catch (error) {
    console.error(error);
  }
};
