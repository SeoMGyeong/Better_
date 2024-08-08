import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

// API 데이터 타입 정의
type Product = {
  id: number;
  brand: string;
  name: string;
  price: string;
  currency: string;
  image_link: string;
  description: string;
};

type RootStackParamList = {
  ProductScreen: { productId: number };
};

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'ProductScreen'>;

const ProductScreen = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const { productId } = route.params;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://makeup-api.herokuapp.com/api/v1/products/${productId}.json`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>로딩 중...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image_link }} style={styles.productImage} />
      <Text style={styles.brandName}>{product.brand}</Text>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.price}>{`₩${parseInt(
        product.price
      ).toLocaleString()}`}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.buttonContainer}>
        <Button title="찜하기" onPress={() => {}} />
        <Button title="장바구니" onPress={() => {}} />
        <Button title="구매하기" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ProductScreen;
