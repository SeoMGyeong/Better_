import { firebaseConfig } from '@/env';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const initFirebase = () => {
  // getApps()는 초기화된 Firebase 앱들의 배열 반환.
  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    return getAuth(app);
  } else {
    // Firebase 앱이 이미 초기화된 경우, 기존 앱을 사용.
    return getAuth();
  }
};
