import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Hr from '@/components/Hr';
import { GRAY } from '@/constants/Colors';
import { useCart } from './CartProvider';
// CartContext 추가

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

  const { addToCart } = useCart(); // CartContext에서 addToCart 가져오기

  const [product, setProduct] = useState<Product | null>(null);
  const [isFavorite, setIsFavorite] = useState(false); // 찜하기 상태 관리

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
      <View style={styles.loadingContainer}>
        <Text>로딩 중...</Text>
      </View>
    );
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // 찜하기 상태를 토글
  };

  // 장바구니에 상품 추가하는 함수
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id.toString(),
        brand: product.brand,
        name: product.name,
        price: parseInt(product.price) * 1600, // 가격을 한화로 변환
        quantity: 1,
        image: product.image_link,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: product.image_link }}
          style={styles.productImage}
        />
        <Hr />
        <Text style={styles.brandName}>{product.brand}</Text>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.price}>{`₩${(
          parseInt(product.price) * 1600
        ).toLocaleString()}`}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleFavorite}>
          <Text style={styles.buttonText}>찜하기&nbsp;</Text>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'} // 상태에 따라 아이콘 변경
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>장바구니</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>구매하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100, // 버튼이 스크롤 내용과 겹치지 않도록 여유 공간을 둡니다.
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  brandName: {
    fontSize: 24,
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between', // 버튼들이 화면을 꽉 채우도록
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  button: {
    flex: 1, // 버튼이 남은 공간을 균등하게 차지하도록
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 5,
    backgroundColor: GRAY.DEFAULT, // 버튼 배경색
    borderRadius: 5,
    flexDirection: 'row', // 아이콘과 텍스트가 나란히 배치되도록
    justifyContent: 'center',
  },
  buttonText: {
    alignItems: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    // marginLeft: 8, // 아이콘과 텍스트 사이에 여백 추가
  },
  icon: {},
});

export default ProductScreen;
