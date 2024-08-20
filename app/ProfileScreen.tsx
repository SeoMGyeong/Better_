import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';

import { useEffect, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header />,
    });
  }, [navigation]);

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <Text>프로필스크린</Text>
    </View>
  );
};

export default ProfileScreen;
