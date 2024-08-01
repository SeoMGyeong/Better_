import { StyleSheet, Text, View } from 'react-native';
// import ContentTab from '@/src/navigations/contentTab';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>첫화면</Text>
      {/* <ContentTab /> */}
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
