import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const SignIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
};
