import { Pressable, StyleSheet, Text, View } from 'react-native';
import TabLayout from './(tabs)/_layout';

const index = () => {
  return (
    <View style={styles.container}>
      <TabLayout />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default index;
