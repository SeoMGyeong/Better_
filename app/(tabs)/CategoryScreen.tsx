import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const productTypes = [
  'Blush',
  'Bronzer',
  'Eyebrow',
  'Eyeliner',
  'Eyeshadow',
  'Foundation',
  'Lip liner',
  'Lipstick',
  'Mascara',
  'Nail polish',
];

const CategoryScreen = () => {
  // const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    productTypes[0]
  );

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false, // 기본 헤더를 숨기기.
  //   });
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabBar}
      >
        {productTypes.map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => setSelectedCategory(type)}
            style={[
              styles.tabItem,
              selectedCategory === type && styles.selectedTabItem,
            ]}
          >
            <Text style={styles.tabText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.content}>
        <Text style={styles.contentText}>{selectedCategory} 제품 목록</Text>
        {/* 여기에 selectedCategory에 해당하는 제품 목록을 표시하는 컴포넌트를 추가합니다 */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
  },
  tabItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedTabItem: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
