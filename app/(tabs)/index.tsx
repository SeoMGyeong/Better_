import { Image, StyleSheet, Platform, View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>홈화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
