import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useCart } from './CartProvider';

const CartScreen = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.price}>{item.price.toLocaleString('ko-KR')}원</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>장바구니에 담긴 상품이 없습니다.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>총 {cartItems.length}건</Text>
            <Text style={styles.totalText}>
              {calculateTotalPrice().toLocaleString('ko-KR')}원
            </Text>
          </View>
          <TouchableOpacity style={styles.purchaseButton}>
            <Text style={styles.purchaseButtonText}>구매하기</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  brand: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    fontSize: 20,
    width: 30,
    textAlign: 'center',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  purchaseButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  purchaseButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default CartScreen;
