import { View, Text, StyleSheet } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>탭홈화면</Text>
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
