import { StyleSheet, Text, View } from "react-native";

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>카테고리 스크린</Text>
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

export default CategoryScreen;
